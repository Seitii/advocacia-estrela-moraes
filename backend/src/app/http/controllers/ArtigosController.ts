import { Request, Response } from "express";
import Artigos from "../models/Artigos";
import { Op } from "sequelize";

class ArtigosController {
    static async getById(req: Request, res: Response): Promise<any>{
        const artigoId = req.params.id;

        const artigo = await Artigos.findByPk(artigoId);
        
        if(!artigo){
            return res.status(404).json({message: "Artigo não encontrado"});
        }
        
        return res.json(artigo);
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

        const artigos = await Artigos.findAll({where});

        return res.json(artigos);
    }

    static async create(req: Request, res: Response): Promise<any>{
        const {nome, descricao, conteudo, ativo, ordem} = req.body;

        if(!nome){
            return res.status(401).json({message: "Nome é obrigatório"});
        }

        const artigo = await Artigos.create({
            nome: nome.toUpperCase(),
            descricao,
            conteudo,
            ativo,
            ordem
        });
        return res.json(artigo);
    }

    static async delete(req: Request, res: Response): Promise<any>{
        const artigoId = req.params.id;

        const artigo = await Artigos.findByPk(artigoId);

        if(!artigo){
            return res.status(404).json({message: "Artigo não encontrado"});
        }

        await artigo.destroy();
        return res.json({message: "Artigo excluído com sucesso"});
    }
}

export default ArtigosController;