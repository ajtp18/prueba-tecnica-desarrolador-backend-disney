import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const Usuario = sequelize.define('Usuario', {
    username:{
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false

}
)

export default Usuario