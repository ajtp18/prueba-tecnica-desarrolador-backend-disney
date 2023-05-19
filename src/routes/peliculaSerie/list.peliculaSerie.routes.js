import express from 'express';
import PeliculaSerie from '../../models/PeliculaSerie.js';
import requireAuth from '../../middleware/auth.middleware.js';

const router = express.Router();

// Obtener todos los pelicula
router.get('/movies', requireAuth, async (req, res) => {
  try {
    const peliculas = await PeliculaSerie.findAll({
      attributes: ['id', 'imagen', 'titulo', 'fechaCreacion'],
    });

    console.log('peliculas:', peliculas);
    res.json(peliculas);
  } catch (error) {
    console.error('Error al obtener las peliculas:', error);
    res.status(500).json({ error: 'Error al obtener las peliculas' });
  }
});

export default router;
