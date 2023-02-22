

export interface ICandidate {
  id?: number | null;
  cedula?: string;
  nombres?: string;
  apellidos?: string;
  fecha_nacimiento?: string;
  trabajo_actual?: string;
  expectativa_salarial?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}