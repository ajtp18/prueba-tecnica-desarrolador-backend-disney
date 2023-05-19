import express from "express";
import { Op } from "sequelize";
import Personaje from "../../models/Personaje.js";
import PeliculaSerie from "../../models/PeliculaSerie.js";
import requireAuth from "../../middleware/auth.middleware.js";

const router = express.Router();

// Obtener todos los personajes o filtrar por nombre
router.get("/characters", requireAuth, async (req, res) => {
  const { nombre } = req.query;
  try {
    let personajes;

    if (nombre) {
      personajes = await Personaje.findAll({
        where: { nombre: { [Op.like]: `%${nombre}%` } },
        attributes: ["id", "imagen", "nombre", "edad", "peso", "historia"],
        include: [
          {
            model: PeliculaSerie,
            as: "peliculaId",
            attributes: ["imagen", "titulo"],
          },
        ],
      });
    } else {
      personajes = await Personaje.findAll({
        attributes: ["imagen", "nombre"],
      });
    }

    console.log("Personajes:", personajes);
    res.json(personajes);
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    res.status(500).json({ error: "Error al obtener los personajes" });
  }
});

export default router;
