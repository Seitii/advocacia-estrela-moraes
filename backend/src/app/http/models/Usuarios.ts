import { Model, DataTypes } from "sequelize";
import sequelize from "../../../database/db";

class Usuarios extends Model {
    id!: number;
    login!: string;
    nome!: string;
    email!: string;
    senha?: string;
    data_criacao!: Date;

    toJSON(): object {
        const attributes = { ...this.get() };
        delete attributes.senha;
        return attributes;
    }
}

Usuarios.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_criacao:{
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Usuarios",
    tableName: "usuarios",
    timestamps: false,
});

export default Usuarios;