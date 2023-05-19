import express from "express";
import bodyParser from "body-parser";

import loginRoutes from "./routes/auth/login.routes.js";
import registerRoutes from './routes/auth/register.routes.js'

import PersonajeRoutes from "./routes/personajes/personaje.routes.js";
import detallePersonale from "./routes/personajes/detallePersonaje.routes.js";
import updatePersonajeRoutes from './routes/personajes/update.personaje.routes.js'
import deletePersonajeRoutes from './routes/personajes/delete.personaje.routes.js'
import createPersonajeRoutes from "./routes/personajes/create.personaje.routes.js";

import peliculaRoutes from "./routes/peliculaSerie/list.peliculaSerie.routes.js";
import updatePeliculaRoutes from "./routes/peliculaSerie/update.peliculaSerie.routes.js"
import createPeliculaRoutes from "./routes/peliculaSerie/create.peliculaSerie.routes.js";
import deletePeliculaRoutes from './routes/peliculaSerie/delete.peliculaSerie.routes.js'

const app = express();

//middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Rutas
app.use("/", loginRoutes);
app.use("/", registerRoutes);

//Personajes
app.use("/", updatePersonajeRoutes);
app.use("/", deletePersonajeRoutes);
app.use("/", PersonajeRoutes);
app.use("/", detallePersonale);
app.use("/", createPersonajeRoutes);

//Peliculas
app.use("/", peliculaRoutes);
app.use("/", updatePeliculaRoutes);
app.use("/", createPeliculaRoutes);
app.use("/", deletePeliculaRoutes);

//Swagger


export default app;
