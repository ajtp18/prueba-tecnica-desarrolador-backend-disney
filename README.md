# prueba-tecnica-desarrolador-backend-disney

Esta Api esta orientada a las peliculas de disney
esta creada en base de express, utilizando una base de datos mysql

Al igual utiliza sequelizer para los modelos
cada modelo esta separado con sus rutas correspondientes

Personajes
Peliculas
Genero
Usuario

el modelo de usuario se creo para guardar respectivamente el usuario y contraseña en la base de datos, para utilizar de manera eficiente el JWT, como tambien se le crearon unas rutas de auth/register y auth/login

en el apartado de config/config.js estan las variables para conectar a la base de datos, exportadas cada una para su uso, solo es remplazar por sus credenciales y correr la api

los endpoints que se generaron fueron
Personajes:
GET http://localhost:3000/characters
POST http://localhost:3000/characters
PUT http://localhost:3000/characters
DELETE http://localhost:3000/characters
Estos funcionan con req.query y req.body para su manipulacion

Peliculas:
GET http://localhost:3000/movies
POST http://localhost:3000/movies
PUT http://localhost:3000/movies
DELETE http://localhost:3000/movies
Estos funcionan con req.query y req.body para su manipulacion

Auth:
POST http://localhost:3000/auth/register
POST http://localhost:3000/auth/login
Estos requieren el req.body con: {
    username: suUsername
    contraseña: suContraseña
}