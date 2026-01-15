import { Request, Response } from "express";
import { Op, where } from "sequelize";
import Advogados from "../models/Advogados";

class AdvogadosController {
    static async getById(req: Request, res: Response): Promise<any>{
        const advogadoId = req.params.id;

        const advogado = await Advogados.findByPk(advogadoId);

        if(!advogado){
            return res.status(404).json({message: "Advogado não encontrado"});
        }

        return res.json(advogado);
    }

    static async getAll(req: Request, res: Response): Promise<any>{
        const {nome, cpf, oab, ativo} = req.query;

        const where: any = {};

        if(nome){
            where.nome = {
                [Op.like]: `%${String(nome).toUpperCase()}%`
            };
        }

        if(cpf){
            where.cpf = cpf;
        }

        if(oab){
            where.oab = oab;
        }

        if (ativo !== undefined) {
            where.ativo = ativo === 'true';
        }

        const advogados = await Advogados.findAll({where});

        return res.json(advogados);
    }

    static async create(req: Request, res: Response): Promise<any>{
        const {nome, cpf, data_nascimento, telefone, oab, ativo} = req.body;
    
        try{
            const advogado = await Advogados.create({
                nome: nome.toUpperCase(),
                cpf, 
                data_nascimento, 
                telefone, 
                oab, 
                ativo
            });
            return res.json(advogado);
        }catch(error){
            console.log(error);
            return res.status(500).json({message: "Erro ao criar Advogado", error});
        }
    }

    static async delete(req: Request, res: Response): Promise<any>{
        const advogadoId = req.params.id;

        const advogado = await Advogados.findByPk(advogadoId);

        if(!advogado){
            return res.status(404).json({message: "Advogado não encontrado"});
        }

        await advogado.destroy();
        return res.json({message: "Advogado deletado com sucesso"});
    }
}

export default AdvogadosController;