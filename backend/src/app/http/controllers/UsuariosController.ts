import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usuarios from "../models/Usuarios";

class UsuariosController {
    public static async login(req: Request, res: Response): Promise<any> {
        const { login, senha } = req.body;
        const user = await Usuarios.findOne({ where: { login } });

        const isPasswordValid = await bcrypt.compare(senha, user?.senha || "");

        if (!user || !isPasswordValid) {
            return res.status(401).json("Usuário ou senha incorretos");
        }

        const secret = process.env.JWT_SECRET || "";

        const options = {
            expiresIn: parseInt(process.env.JWT_TTL || "3600"),
        } as jwt.SignOptions;

        const token = jwt.sign(
            { 
                sub: user.id 
            },
            secret,
            options
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.APP_ENV === "production",
            sameSite: "strict",
            maxAge: process.env.JWT_TTL ? parseInt(process.env.JWT_TTL) * 1000 : 3600 * 1000,
            path: "/",
        });

        return res.json(user);
    }

    public static async isAuth(req: Request, res: Response): Promise<any> {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json("Não autenticado");
        }

        const user = req.user;

        return res.json(user);
    }
}

export default UsuariosController;