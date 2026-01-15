import {Model, DataTypes} from "sequelize";
import sequelize from "../../../database/db";

class Advogados extends Model{
    id!: number;
    nome!: string; 
    cpf!: string; 
    data_nascimento!: Date; 
    telefone!: string;
    oab!: string; 
    ativo!: boolean;

    toJSON(): object{
        const attributes = {...this.get()};
        return attributes;
    }
}
Advogados.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    oab: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
},{
    sequelize,
    modelName: "Advogados",
    tableName: "advogados",
    timestamps: false,
});

export default Advogados;



