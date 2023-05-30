import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Usuario from "../../models/Usuario.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// Ruta de login
router.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findOne({ where: { username } });

    // Verificar si usuario existe
    if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign({ username }, process.env.CONFIG, { expiresIn: "1h" });

    // Enviar el token en la respuesta JSON
    res.json({ auth: true, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;
