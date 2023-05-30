import express from 'express';
import bcrypt from 'bcrypt';
import Usuario from '../../models/Usuario.js';

const router = express.Router();

// Ruta de registro
router.post('/auth/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await Usuario.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ error: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await Usuario.create({ username, password: hashedPassword });

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

export default router;
