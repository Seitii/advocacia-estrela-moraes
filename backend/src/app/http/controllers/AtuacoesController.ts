import { Request, Response } from "express";
import Atuacoes from "../models/Atuacoes";
import { Op } from "sequelize";

class AtuacoesController {
    static async getById(req: Request, res: Response): Promise<any>{
        const atuacaoId = req.params.id;

        const atuacao = await Atuacoes.findByPk(atuacaoId);
        
        if(!atuacao){
            return res.status(404).json({message: "Atuação não encontrada"});
        }
        
        return res.json(atuacao);
    }

    static async getAll(req: Request, res: Response): Promise<any>{
        const {nome, ativo} = req.query;

        const where: any = {};

        if(nome){
            where.nome = {
                [Op.like]: `%${String(nome).toUpperCase()}%`
            }
        }

        if (ativo !== undefined) {
            where.ativo = ativo === 'true';
        }

        const atuacoes = await Atuacoes.findAll({where});

        return res.json(atuacoes);
    }

    static async create(req: Request, res: Response): Promise<any>{
        const {nome, descricao, ativo, ordem} = req.body;

        if(!nome){
            return res.status(401).json({message: "Nome é obrigatório"});
        }

        const atuacao = await Atuacoes.create({
            nome: nome.toUpperCase(),
            descricao,
            ativo,
            ordem
        });
        return res.json(atuacao);
    }

    static async delete(req: Request, res: Response): Promise<any>{
        const atuacaoId = req.params.id;

        const atuacao = await Atuacoes.findByPk(atuacaoId);

        if(!atuacao){
            return res.status(404).json({message: "Atuação não encontrada"});
        }

        await atuacao.destroy();
        return res.json({message: "Atuação excluída com sucesso"});
    }
}

export default AtuacoesController;