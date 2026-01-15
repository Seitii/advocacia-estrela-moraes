import {Model, DataTypes} from "sequelize";
import sequelize from "../../../database/db";

class Artigos extends Model {
    id!: number;
    nome!: string;
    descricao!: string;
    conteudo!: string;
    ativo!: boolean;
    ordem!: number;

    toJSON(): object{
        const attributes = {...this.get()};
        return attributes;
    }
}

Artigos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    ordem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    sequelize,
    modelName: "Artigos",
    tableName: "artigos",
    timestamps: false,
});

export default Artigos;