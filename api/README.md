## Descripción

- API acceso recursos candidatos postulados a posición dev...

## Versión

- v1.0.0

## Instalación

```bash
$ npm install
```

## Ejecutar API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Ejecutar API y Base de datos

```bash
#descargar imagen de mysql:latest
$ 1 - docker pull mysql

# Poner en marcha API Y DB
$ 2 - docker compose up

# Si falla el proceso en Docker al ejecutar el script de base de datos.
# Copiar el script al contendor para crear la base de datos (se insertan datos de prueba)
$ docker cp script/francisco_valdez_prueba.sql br_test_db:/francisco_valdez_prueba.sql

#Acceda al contenedor de base de datos
$ docker exec -it br_test_db bash

#Una vez dentro login a mysql. Nota: password: "br_test_password"
$ mysql -u root -p
$ source francisco_valdez_prueba.sql

```
## Documentación API
```
- swagger
# [host]:3000/api | http://localhost:3000/api

```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Soporte

- Autor - Francisco Valdez F.
- Email: satelite0ster@gmail.com

## Requerimientos Funcionales

- Construir base de datos:
  -Nombre batos: testbr_db

  Campos:
  - id 
  - Cedula 
  - Nombres
  - Apellidos
  - Fecha de Nacimiento
  - Trabajo actual
  - Expectativa Salarial
  - fecha de creación
  - fecha de actualzación
  - fecha eliminado

- Al momento de agregar un registro validar que el identificar del candidato no pueda ser duplicado.
- Falitarle al usuario la visualización de los registros generados.
- Desarrollo de una aplicación que pueda ser ejecutada en cualquier navegddor de internet actualizado.
- Eliminar y editar cualquer registro.

## Requerimientos no funcionales
- Niveles de seguridad no contemplados para este esenario.
- Compatibilidad con navegadores: No compatible con viejas versiones: IE, etc.

## script db
```sql
create database if not exists testbr_db;

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

```

