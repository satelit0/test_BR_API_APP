import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('candidatos')
export class Candidate {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({length: 11, unique: true})
  cedula: string;
  
  @Column({ length: 60})
  nombres: string;
  
  @Column({ length: 60})
  apellidos: string;
  
  @Column()
  fecha_nacimiento: Date;
  
  @Column({ length: 100})
  trabajo_actual: string;
  
  @Column()
  expectativa_salarial: number;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
