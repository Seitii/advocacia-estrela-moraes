import express from "express";
import AdvogadosController from "../http/controllers/AdvogadosController";
import { body } from "express-validator";
import { validate } from "../http/middlewares/ValidateMiddleware";

const router = express.Router();

router.get("/:id", AdvogadosController.getById);
router.get("/", AdvogadosController.getAll);
router.post(
    "/",
    validate([
        body("nome")
            .notEmpty()
            .withMessage("Obrigatório informar o nome"),
        body("cpf")
            .notEmpty()
            .withMessage("Obrigatório informar o cpf"),
        body("data_nascimento")
            .notEmpty()
            .isDate()
            .withMessage("Obrigatório informar a data de nascimento"),
        body("telefone")
            .notEmpty()
            .withMessage("Obrigatório informar o telefone"),
        body("oab")
            .notEmpty()
            .isInt()
            .withMessage("Obrigatório informar o oab"),
        body("ativo")
            .notEmpty()
            .isBoolean()
            .withMessage("Obrigatório informar o ativo")
    ]),
    AdvogadosController.create,
);

export default router;