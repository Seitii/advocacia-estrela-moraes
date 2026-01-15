import {Model, DataTypes} from "sequelize";
import sequelize from "../../../database/db";

class Atuacoes extends Model {
    id!: number;
    nome!: string;
    descricao!: string;
    ativo!: boolean;
    ordem!: number;
    toJSON(): object{
        const attributes = {...this.get()};
        return attributes;
    }
}

Atuacoes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
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
    }
}, {
    sequelize,
    modelName: "Atuacoes",
    tableName: "atuacoes",
    timestamps: false
});

export default Atuacoes;