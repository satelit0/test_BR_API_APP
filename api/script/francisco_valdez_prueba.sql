create database if not exists testbr_db;
 drop table if exists testbr_db.candidatos;

create table if not exists testbr_db.candidatos (
  id int not null auto_increment,
  nombres varchar(60) not null,
  apellidos varchar(60) not null,
  cedula varchar(11) not null,
  fecha_nacimiento datetime(6) not null,
  trabajo_actual varchar(100) null,
  expectativa_salarial decimal(8,2) null,
  createdAt datetime(6) not null default(CURRENT_TIMESTAMP(6)),
  updatedAt datetime(6) not null default(CURRENT_TIMESTAMP(6)) ON UPDATE CURRENT_TIMESTAMP(6),
  deletedAt datetime(6) null default(null),
  primary key (id),
  unique index cedula_unique (cedula) visible,
  unique index id_unique (id asc) visible);
  
  
 insert into testbr_db.candidatos (nombres, apellidos, cedula, fecha_nacimiento, trabajo_actual, expectativa_salarial, createdAt, updatedAt, deletedAt) 
 values ('francisco', 'valdez ferreira', '11800083112', '1977-07-13', 'freelance', 100000, now(), now(), null), 
 	      ('juan', 'alcantara', '11800000003', '1980-01-11', 'gerente de ti', 100001, now(), now(), null),
 	      ('marino', 'miranda', '11800000013', '1970-01-14', 'soporte tecnico', 400000, now(), now(), null),
 	      ('marcos juan', 'santa rosa', '11800000032', '1978-08-16', 'soporte a ventas', 440000, now(), now(), null),
 	      ('pedro julio', 'jamillo cornelio', '11800000034', '1978-08-16', 'soporte a ventas', 440000, now(), now(), null),
        ('pedro', 'martinez', '11800000004', '1981-02-12', 'gerente de desarrollo', 100002, now(), now(), null);
