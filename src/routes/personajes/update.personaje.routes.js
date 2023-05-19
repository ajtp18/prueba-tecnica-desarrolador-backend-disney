import express from 'express';
import { Op } from 'sequelize';
import Personaje from '../../models/Personaje.js';
import requireAuth from '../../middleware/auth.middleware.js';

const router = express.Router();

// Actualizar un personaje
router.put('/characters', requireAuth ,async (req, res) => {
  const { id } = req.query;
  const { edad, pelicula } = req.body;

  try {
    // Verificar si el personaje existe 
    const personaje = await Personaje.findByPk(id);

    if (!personaje) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }

    // Actualizar los datos del personaje
    personaje.edad = edad;
    personaje.pelicula = pelicula;

    // Guardar en base de datos
    await personaje.save();

    res.json(personaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

export default router;
