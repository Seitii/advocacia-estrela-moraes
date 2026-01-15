import { Request, Response } from "express";
import ConfiguracaoSite from "../models/ConfiguracaoSite";
import { Op } from "sequelize";

class ConfiguracaoSiteController {
    static async getAll(req: Request, res: Response): Promise<any>{
        const configuracaoSite = await ConfiguracaoSite.findAll();

        return res.json(configuracaoSite);
    }

    static async create(req: Request, res: Response): Promise<any>{
        const {telefone, whatsapp, email, endereco} = req.body;

        try{
            const configuracaoSite = await ConfiguracaoSite.create({
                telefone, 
                whatsapp, 
                email, 
                endereco
            });
    
            return res.json(configuracaoSite);
        }catch(error){
            console.log(error);
            return res.status(500).json({message: "Erro ao criar a configuração"});
        }
    }
}

export default ConfiguracaoSiteController;