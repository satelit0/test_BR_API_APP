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

## Ejecutar Base de datos

```bash
#descargar imagen de mysql:latest
$ docker pull mysql

# Poner en marcha API Y DB
$ docker compose up

#Crear base de datos
#Copiar el script al contendor para crear la base de datos (se insertan datos de prueba)
$ docker cp script/francisco_valdez_prueba.sql br_test_db:/francisco_valdez_prueba.sql

#Acceda al contenedor de base de datos
$ docker exec -it br_test_db bash

#Una vez dentro login a mysql Nota: password: "br_test_password"
$ mysql -u root -p
$ source francisco_valdez_prueba.sql




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
- Desarrolo de una aplicación que pueda ser ejecutada en cualquier navegddor de internet actualizado.


