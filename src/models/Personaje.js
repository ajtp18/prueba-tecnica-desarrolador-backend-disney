import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db.js";
import PeliculaSerie from "./PeliculaSerie.js";

class Personaje extends Model {}

Personaje.init(
  {
    imagen: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    historia: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    nombrePelicula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    peliculaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PeliculaSerie,
        key: "id",
      }
    },
  },
  {
    sequelize,
    modelName: "Personajes",
    timestamps: false,
  }
);
Personaje.belongsTo(PeliculaSerie, { foreignKey: "peliculaId" });
export default Personaje;
