import express from "express";
import Personaje from "../../models/Personaje.js";
import PeliculaSerie from "../../models/PeliculaSerie.js";
import requireAuth from "../../middleware/auth.middleware.js";

const router = express.Router();

// Crear un nuevo personaje
router.post("/characters", requireAuth, async (req, res) => {
  const { imagen, nombre, edad, peso, historia, nombrePelicula, peliculaId } = req.body;

  try {
    const pelicula = await PeliculaSerie.findByPk(peliculaId);

    if (!pelicula) {
      return res.status(404).json({ error: "La película/serie no existe" });
    }

    const personaje = await Personaje.create({
      imagen,
      nombre,
      edad,
      peso,
      historia,
      nombrePelicula,
      peliculaId,
    });

    console.log("Personaje creado:", personaje);
    res.status(201).json(personaje);
  } catch (error) {
    console.error("Error al crear el personaje:", error);
    res.status(500).json({ error: "Error al crear el personaje" });
  }
});

export default router;
