import express from "express";
import PeliculaSerie from "../../models/PeliculaSerie.js";
import requireAuth from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/movies", requireAuth, async (req, res) => {
  const { imagen, titulo, fechaCreacion, calificacion } = req.body;
  
  try {
    const peliSerie = await PeliculaSerie.create({
      imagen,
      titulo,
      fechaCreacion,
      calificacion,
    });

    console.log("Película/Serie creada:", peliSerie);
    res.status(201).json(peliSerie);
  } catch (error) {
    console.error("Error al crear la película/serie:", error);
    res.status(500).json({ error: "Error al crear la película/serie" });
  }
});

export default router;
