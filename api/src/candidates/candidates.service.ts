import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { Candidate } from './entities/candidate.entity';
import { ER_DUP_ENTRY } from '../utils/handledErrorDatabase';
import { CandidateType } from './candidates.type';

@Injectable()
export class CandidatesService {

  constructor(
    @InjectRepository(Candidate) private readonly canditateRepository: Repository<Candidate>,
    private dataSource: DataSource,
  ) { }

  async create(createCandidateDto: CreateCandidateDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const candidate = this.canditateRepository.create({ ...createCandidateDto });

      const newCandidate = await queryRunner.manager.save(candidate);

      await queryRunner.commitTransaction();

      return newCandidate;

    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error.code === ER_DUP_ENTRY) throw new HttpException(`Cédula ingresada ya existe`, HttpStatus.BAD_REQUEST);
      throw new HttpException(`Algo salio mal, contacte el administrador`, HttpStatus.INTERNAL_SERVER_ERROR);

    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    try {
      const candidates = this.canditateRepository.find();
      return candidates;
    } catch (error) {
      if (error.code === HttpStatus.INTERNAL_SERVER_ERROR) throw new HttpException(`Algo salio mal, contacte el administrador`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const candidate = await this.canditateRepository.findOneBy({ id });
      if (candidate) return candidate;

      throw new HttpException(`Candidato con id ${id} no existe`, HttpStatus.NOT_FOUND);
    } catch (error) {

      if (![HttpStatus.NOT_FOUND, HttpStatus.BAD_REQUEST, HttpStatus.UNAUTHORIZED].includes(error.status)) throw new HttpException(`Algo salio mal, contacte el administrador`, HttpStatus.INTERNAL_SERVER_ERROR);

      throw new HttpException(`${error.message}`, error.status);
    }
  }

  async findOneBy(params: CandidateType) {
    try {
      const candidate = await this.canditateRepository.findOneBy({ ...params });

      return candidate;
    } catch (error) {
      throw new HttpException(`Algo salio mal, contacte el administrador`, error.code);
    }
  }

  async update(id: number, updateCandidateDto: UpdateCandidateDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {

      const { cedula } = updateCandidateDto;

      /* Si el id no existe capturamos la exepción: statusCode: httpStatus.NOT_FOUND*/
      await this.findOne(id);

      /* Si la cédula no fue provista continua, de lo contrario validar */
      if(cedula) {
        const findCandidate = await this.findOneBy({cedula});
        if (findCandidate) {
          const { id: idFinded } = findCandidate;
          if (idFinded !== id) throw new HttpException(`Cédula ingresada ya existe en otro registro de candidato`, HttpStatus.BAD_REQUEST);
        }
      }

      const canditate = this.canditateRepository.create({ ...updateCandidateDto });

      const candidateEdited = queryRunner.manager.update(Candidate, id, canditate);

      await queryRunner.commitTransaction();
      return candidateEdited;
    } catch (error) { 

      await queryRunner.rollbackTransaction();
      if (![HttpStatus.NOT_FOUND, HttpStatus.BAD_REQUEST, HttpStatus.UNAUTHORIZED].includes(error.status)) throw new HttpException(`Algo salio mal, contacte el administrador`, HttpStatus.INTERNAL_SERVER_ERROR);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    } finally {
      await queryRunner.release();
    }

  }

  remove(id: number, soft: boolean) {
    try {
      if (soft) return this.canditateRepository.softDelete(id);
      return this.canditateRepository.delete(id);
    } catch (error) {
      throw new HttpException(`Algo salio mal, contacte el administrador`, error.code);
    }
  }

  async restore(id: number) {
    try {
      await this.findOne(id);
      await this.canditateRepository.restore(id);
    } catch (error) {
      if([HttpStatus.NOT_FOUND].includes(error.status)) return new HttpException(`${ error.message }`, error.status); 
      throw new HttpException(`Algo salio mal, contacte el administrador`, error.code);
    }
  }
}
