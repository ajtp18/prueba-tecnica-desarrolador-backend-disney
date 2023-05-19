import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const requireAuth = (req, res, next) => {
  // Obtén el token de la solicitud
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.CONFIG);

    // Agregar los datos decodificados al objeto de solicitud para uso posterior
    req.user = decoded;

    // Llamar a la siguiente función en la cadena de middlewares
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error);
    return res.status(401).json({ error: 'Acceso no autorizado. Token inválido.' });
  }
};

export default requireAuth;
