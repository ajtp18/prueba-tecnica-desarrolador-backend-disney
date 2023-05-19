import { Sequelize } from "sequelize";
import {
  database,
  username,
  password,
  host,
  dialect,
  port,
} from "../config/config.js";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  port: port,
});

const conectarBD = async () => {
  try {
    // onexión a la base de datos
    await sequelize.authenticate();
    console.log("Conexión establecida con la base de datos.");
    await sequelize.sync({ force: false });

  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};
conectarBD();

export default sequelize;
