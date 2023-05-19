import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";

const Genero = sequelize.define(
  "Genero",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
export default Genero;
