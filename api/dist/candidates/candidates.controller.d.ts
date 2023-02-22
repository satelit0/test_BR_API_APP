import { HttpException } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
export declare class CandidatesController {
    private readonly candidatesService;
    constructor(candidatesService: CandidatesService);
    create(createCandidateDto: CreateCandidateDto): Promise<import("./entities/candidate.entity").Candidate>;
    findAll(): Promise<import("./entities/candidate.entity").Candidate[]>;
    findOne(id: number): Promise<import("./entities/candidate.entity").Candidate>;
    update(id: number, updateCandidateDto: UpdateCandidateDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number, soft: boolean): Promise<import("typeorm").DeleteResult>;
    restore(id: number): Promise<HttpException>;
}
