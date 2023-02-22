import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, ParseBoolPipe, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { ApiParam, ApiQuery, ApiResponse, ApiResponseProperty, ApiTags } from '@nestjs/swagger';
import { CandidateType } from './candidates.type';

@ApiTags('Candidatos')
@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) { }

  @ApiResponse({type:CandidateType, isArray: false, status: 201, description: 'Retorna el candidato creado'}) 
  @ApiResponse({type:String, isArray: false, status: 500, description: 'Error interno del servidor'})
  @Post()
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidatesService.create(createCandidateDto);
  }

  @ApiResponse({type:CandidateType, isArray: true, status: 200, description: 'Retorna una matris de candidatos'})
  @Get()
  findAll() {
    return this.candidatesService.findAll();
  }
  
  @ApiResponse({type:CandidateType, isArray: false, status: 200, description: 'Retorna un candidato por su ID'})
  @ApiResponse({type:String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado'})
  @ApiResponse({type:String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor'})
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.candidatesService.findOne(id);
  }
  
  @ApiResponse({type:String, isArray: false, status: 204, description: 'Retorna: Sin contenido'})
  @ApiResponse({type:String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado'})
  @ApiResponse({type:String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor'})
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidatesService.update(id, updateCandidateDto);
  }
  
  
  @ApiResponse({type:String, isArray: false, status: 204, description: 'Retorna: Sin contenido'})
  @ApiResponse({type:String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado'})
  @ApiResponse({type:String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor'})
  @ApiQuery({ name: 'soft', required: true, description: 'Soft: si True no se eliminará el recurso de forma permanente, sin acceso fuera del API, se puede recuperar.' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Query('soft', ParseBoolPipe) soft: boolean) {
    return this.candidatesService.remove(id, soft);
  }
  
  @ApiResponse({type:String, isArray: false, status: 204, description: 'Retorna: Sin contenido'})
  @ApiResponse({type:String, isArray: false, status: 404, description: 'Retorna 404, recurso no hallado'})
  @ApiResponse({type:String, isArray: false, status: 500, description: 'Retorna: Error interno del servidor'})
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    return await this.candidatesService.restore(id);
  }
}
