import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCandidateDto {

  @ApiProperty({name: 'cedula', type: String, default: '11800083112'})
  @IsString()
  @IsNotEmpty()
  cedula: string;
  
  @ApiProperty({name: 'nombres', type: String, default: 'Juan Francisco'})
  @IsString()
  @IsNotEmpty()
  nombres: string;
  
  @ApiProperty({name: 'apellidos', type: String, default: 'de la cruz pérez'})
  @IsNotEmpty()
  @IsString()
  apellidos: string;
  
  @ApiProperty({name: 'fecha_nacimiento', type: Date, default: '1980-07-10'})
  @IsNotEmpty()
  @IsISO8601()
  fecha_nacimiento: Date;
  
  @ApiProperty({name: 'trabajo_actual', type: String, default: 'Gerente de TI', required: false})
  @IsString()
  @IsOptional()
  trabajo_actual?: string;
  
  @ApiProperty({name: 'expectativa_salarial', type: Number, default: 100000, required: false})
  @IsOptional()
  @IsNumber()
  expectativa_salarial?: number;

}
