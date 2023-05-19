import express from "express";
import { Op } from "sequelize";
import Personaje from "../../models/Personaje.js";
import PeliculaSerie from "../../models/PeliculaSerie.js";
import requireAuth from "../../middleware/auth.middleware.js";

const router = express.Router();

// Obtener detalle de un personaje por nombre
router.get("/characters", requireAuth, async (req, res) => {
  const { nombre } = req.query;

  try {
    const personaje = await Personaje.findOne({
      where: { nombre: { [Op.iLike]: `%${nombre}%` } },
      attributes: ["nombre", "edad", "peso", "historia"],
      include: [
        {
          model: PeliculaSerie,
          as: "personajes",
          attributes: ["imagen", "titulo"],
        },
      ],
    });

    if (!personaje) {
      return res.status(404).json({ error: "Personaje no encontrado" });
    }

    console.log("Detalle del personaje:", personaje);
    res.json(personaje);
  } catch (error) {
    console.error("Error al obtener el detalle del personaje:", error);
    res.status(500).json({ error: "Error al obtener el detalle del personaje" });
  }
});

export default router;
