

export interface ICandidate {
  id?: number;
  cedula?: string;
  nombres?: string;
  apellidos?: string;
  fecha_nacimiento?: Date;
  trabajo_actual?: string;
  expectativa_salarial?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}