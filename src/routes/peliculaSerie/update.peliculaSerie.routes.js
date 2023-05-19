import express from "express";
import { Op } from "sequelize";
import PeliculaSerie from "../../models/PeliculaSerie.js";
import requireAuth from "../../middleware/auth.middleware.js";

const router = express.Router();

router.put("/movies", requireAuth, async (req, res) => {
  const { id } = req.query;
  const { fechaCreacion, calificacion } = req.body;

  try {
    //verificar si existe
    const pelicula = await PeliculaSerie.findByPk(id);

    if (!pelicula) {
      return res.status(404).json({ error: "Pelicula no encuentrada" });
    }

    //Actualizar
    pelicula.fechaCreacion = fechaCreacion;
    pelicula.calificacion = calificacion;

    //Guardar en base de datos
    await pelicula.save();

    res.json(pelicula);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;