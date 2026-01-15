import express from "express";
import { body } from "express-validator";
import { validate } from "../http/middlewares/ValidateMiddleware";
import UsuariosController from "../http/controllers/UsuariosController";
import isAuth from "../http/helpers/isAuth";

const router = express.Router();

router.post(
    "/login",
    validate([
        body("login")
            .notEmpty()
            .withMessage("Obrigatório informar o nome de usuário"),
        body("senha")
            .notEmpty()
            .withMessage("Obrigatório informar a senha")
            .isLength({ min: 6 })
            .withMessage("A senha precisa ter pelo menos 6 caracteres"),
    ]),
    UsuariosController.login, 
);

router.get(
    "/isAuth",
    isAuth(),
    UsuariosController.isAuth
);

export default router;