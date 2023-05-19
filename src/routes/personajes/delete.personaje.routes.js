import express from 'express';
import Personaje from '../../models/Personaje.js';
import requireAuth from '../../middleware/auth.middleware.js';

const router = express.Router();

// Eliminar un personaje
router.delete('/characters', requireAuth, async (req, res) => {
  const { id } = req.query;

  try {
    // Verificar si el personaje existe
    const personaje = await Personaje.findByPk(id);
    if (!personaje) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }

    // Eliminar el personaje
    await personaje.destroy();

    res.json({ message: 'Personaje eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

export default router;
