import {Model, DataTypes} from "sequelize";
import sequelize from "../../../database/db";

class ConfiguracaoSite extends Model {
    id!: number;
    telefone!: string;
    whatsapp!: string;
    email!: string;
    endereco!: string;

    toJSON(): Object{
        const attributes = {...this.get()};
        return attributes;
    }
}

ConfiguracaoSite.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    whatsapp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "ConfiguracaoSite",
    tableName: "configuracao_site",
    timestamps: false
});

export default ConfiguracaoSite;
