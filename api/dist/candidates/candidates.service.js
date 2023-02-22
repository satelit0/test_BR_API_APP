"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const candidate_entity_1 = require("./entities/candidate.entity");
const handledErrorDatabase_1 = require("../utils/handledErrorDatabase");
let CandidatesService = class CandidatesService {
    constructor(canditateRepository, dataSource) {
        this.canditateRepository = canditateRepository;
        this.dataSource = dataSource;
    }
    async create(createCandidateDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.startTransaction();
        try {
            const candidate = this.canditateRepository.create(Object.assign({}, createCandidateDto));
            const newCandidate = await queryRunner.manager.save(candidate);
            await queryRunner.commitTransaction();
            return newCandidate;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            if (error.code === handledErrorDatabase_1.ER_DUP_ENTRY)
                throw new common_1.HttpException(`Cédula ingresada ya existe`, common_1.HttpStatus.BAD_REQUEST);
            throw new common_1.HttpException(`Algo salio mal, contacte el administrador`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        finally {
            await queryRunner.release();
        }
    }
    findAll() {
        try {
            const candidates = this.canditateRepository.find();
            return candidates;
        }
        catch (error) {
            if (error.code === common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                throw new common_1.HttpException(`Algo salio mal, contacte el administrador`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const candidate = await this.canditateRepository.findOneBy({ id });
            if (candidate)
                return candidate;
            throw new common_1.HttpException(`Candidato con id ${id} no existe`, common_1.HttpStatus.NOT_FOUND);
        }
        catch (error) {
            if (![common_1.HttpStatus.NOT_FOUND, common_1.HttpStatus.BAD_REQUEST, common_1.HttpStatus.UNAUTHORIZED].includes(error.status))
                throw new common_1.HttpException(`Algo salio mal, contacte el administrador`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            throw new common_1.HttpException(`${error.message}`, error.status);
        }
    }
    async findOneBy(params) {
        try {
            const candidate = await this.canditateRepository.findOneBy(Object.assign({}, params));
            return candidate;
        }
        catch (error) {
            throw new common_1.HttpException(`Algo salio mal, contacte el administrador`, error.code);
        }
    }
    async update(id, updateCandidateDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.startTransaction();
        try {
            const { cedula } = updateCandidateDto;
            await this.findOne(id);
            if (cedula) {
                const findCandidate = await this.findOneBy({ cedula });
                if (findCandidate) {
                    const { id: idFinded } = findCandidate;
                    if (idFinded !== id)
                        throw new common_1.HttpException(`Cédula ingresada ya existe en otro registro de candidato`, common_1.HttpStatus.BAD_REQUEST);
                }
            }
            const canditate = this.canditateRepository.create(Object.assign({}, updateCandidateDto));
            const candidateEdited = queryRunner.manager.update(candidate_entity_1.Candidate, id, canditate);
            await queryRunner.commitTransaction();
            return candidateEdited;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            if (![common_1.HttpStatus.NOT_FOUND, common_1.HttpStatus.BAD_REQUEST, common_1.HttpStatus.UNAUTHORIZED].includes(error.status))
                throw new common_1.HttpException(`Algo salio mal, contacte el administrador`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
        finally {
            await queryRunner.release();
        }
    }
    remove(id, soft) {
        try {
            if (soft)
                return this.canditateRepository.softDelete(id);
            return this.canditateRepository.delete(id);
        }
        catch (error) {
            throw new common_1.HttpException(`Algo salio mal, contacte el administrador`, error.code);
        }
    }
    async restore(id) {
        try {
            await this.findOne(id);
            await this.canditateRepository.restore(id);
        }
        catch (error) {
            if ([common_1.HttpStatus.NOT_FOUND].includes(error.status))
                return new common_1.HttpException(`${error.message}`, error.status);
            throw new common_1.HttpException(`Algo salio mal, contacte el administrador`, error.code);
        }
    }
};
CandidatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(candidate_entity_1.Candidate)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], CandidatesService);
exports.CandidatesService = CandidatesService;
//# sourceMappingURL=candidates.service.js.map