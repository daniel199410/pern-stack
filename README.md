Para conectarse a la base de datos es necesario crear un archivo .env en la raíz del proyecto con las siguientes variables:

```
POSTGRES_USER="Acá se pone el nombre de usuario que se le quiere asignar a la base de datos"

POSTGRES_PASSWORD="Acá se pone el nombre de usuario que se le quiere asignar a la base de datos"

DB_HOST=localhost

DB_PORT=54321

DB_NAME=tasks_db
```

# Correr proyecto base de datos

`docker exec -it <ID_CONTENEDOR> psql -U pern_user`

Donde *<ID_CONTENEDOR>* es el id del contenedor donde se ejecuta la instancia de POstgreSQL. Este id se puede saber con el comando 
`docker ps`.

Ejecutar `create database tasks_db;` para crea la base de datos.

Ejecutar `\c tasks_db` para ingresar a la base de datos task_db.

Para crear la tabla se debe correr el script que se encuentra en database/db.sql
