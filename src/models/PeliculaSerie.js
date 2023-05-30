import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const PeliculaSerie = sequelize.define(
  "PeliculaId",
  {
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    timestamps: false,
  }
);
import("./Personaje.js").then((module) => {
  const Personaje = module.default;
  PeliculaSerie.hasMany(Personaje, {
    foreignKey: "peliculaId"
  });
});
export default PeliculaSerie;
