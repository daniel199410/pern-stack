Correr
`base de datos: docker exec -it <ID_CONTENEDOR> psql -U pern_user`
`create database tasks_db;`
`\c tasks_db`
Donde *<ID_CONTENEDOR>* es el id del contenedor donde se ejecuta la instancia de POstgreSQL. Este id se puede saber con el comando 
`docker ps`.
Para crear la tabla se debe correr el script que se encuentra en database/db.sql


