import express from "express";
import { Op } from "sequelize";
import PeliculaSerie from "../../models/PeliculaSerie.js";
import requireAuth from "../../middleware/auth.middleware.js";

const router = express.Router();

//Eliminar una pelicua o serie
router.delete("/movies", requireAuth, async (req, res) => {
  const { id } = req.query;

  try {
    //verificar si existe pelicula o serie
    const pelicula = await PeliculaSerie.findByPk(id);
    if (!pelicula) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada" });
    }
    //Elimina la pelicula o serie
    await pelicula.destroy();

    res.json({ message: "Pelicula o Serie a sido eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" }, error);
  }
});

export default router;
