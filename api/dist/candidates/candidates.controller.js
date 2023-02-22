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
exports.CandidatesController = void 0;
const common_1 = require("@nestjs/common");
const candidates_service_1 = require("./candidates.service");
const create_candidate_dto_1 = require("./dto/create-candidate.dto");
const update_candidate_dto_1 = require("./dto/update-candidate.dto");
const swagger_1 = require("@nestjs/swagger");
const candidates_type_1 = require("./candidates.type");
let CandidatesController = class CandidatesController {
    constructor(candidatesService) {
        this.candidatesService = candidatesService;
    }
    create(createCandidateDto) {
        return this.candidatesService.create(createCandidateDto);
    }
    findAll() {
        return this.candidatesService.findAll();
    }
    findOne(id) {
        return this.candidatesService.findOne(id);
    }
    update(id, updateCandidateDto) {
        return this.candidatesService.update(id, updateCandidateDto);
    }
    remove(id, soft) {
        return this.candidatesService.remove(id, soft);
    }
    async restore(id) {
        return await this.candidatesService.restore(id);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ type: candidates_type_1.CandidateType, isArray: false, status: 201, description: 'Retorna el candidato creado' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 500, description: 'Error interno del servidor' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidate_dto_1.CreateCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: candidates_type_1.CandidateType, isArray: true, status: 200, description: 'Retorna una matris de candidatos' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: candidates_type_1.CandidateType, isArray: false, status: 200, description: 'Retorna un candidato por su ID' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 204, description: 'Retorna: Sin contenido' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_candidate_dto_1.UpdateCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 204, description: 'Retorna: Sin contenido' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor' }),
    (0, swagger_1.ApiQuery)({ name: 'soft', required: true, description: 'Soft: si True no se eliminará el recurso de forma permanente, sin acceso fuera del API, se puede recuperar.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('soft', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], CandidatesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 204, description: 'Retorna: Sin contenido' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado' }),
    (0, swagger_1.ApiResponse)({ type: String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Patch)('restore/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "restore", null);
CandidatesController = __decorate([
    (0, swagger_1.ApiTags)('Candidatos'),
    (0, common_1.Controller)('candidates'),
    __metadata("design:paramtypes", [candidates_service_1.CandidatesService])
], CandidatesController);
exports.CandidatesController = CandidatesController;
//# sourceMappingURL=candidates.controller.js.map