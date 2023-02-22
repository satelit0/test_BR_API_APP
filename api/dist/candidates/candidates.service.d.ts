import { HttpException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { Candidate } from './entities/candidate.entity';
import { CandidateType } from './candidates.type';
export declare class CandidatesService {
    private readonly canditateRepository;
    private dataSource;
    constructor(canditateRepository: Repository<Candidate>, dataSource: DataSource);
    create(createCandidateDto: CreateCandidateDto): Promise<Candidate>;
    findAll(): Promise<Candidate[]>;
    findOne(id: number): Promise<Candidate>;
    findOneBy(params: CandidateType): Promise<Candidate>;
    update(id: number, updateCandidateDto: UpdateCandidateDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number, soft: boolean): Promise<import("typeorm").DeleteResult>;
    restore(id: number): Promise<HttpException>;
}
