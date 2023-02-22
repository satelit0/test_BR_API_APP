import { ApiProperty } from "@nestjs/swagger";

export class CandidateType {
  
  @ApiProperty({name: 'id', type: Number,})
  id?: number;

  @ApiProperty({name: 'cedula', type: String, })
  cedula?: string;
  
  @ApiProperty({name: 'nombres', type: String, })
  nombres?: string;
  
  @ApiProperty({name: 'apellidos', type: String, })
  apellidos?: string;
  
  @ApiProperty({name: 'fecha_nacimiento', type: Date, })
  fecha_nacimiento?: Date;
  
  @ApiProperty({name: 'trabajo_actual', type: String, required: false})
  trabajo_actual?: string;
  
  @ApiProperty({name: 'expectativa_salarial', type: Number, required: false})
  expectativa_salarial?: number;;

  @ApiProperty({name: 'createdAt', type: Date, required: false})
  createdAt?: Date;

  @ApiProperty({name: 'updatedAt', type: Date, required: false})
  updatedAt?: Date;
}