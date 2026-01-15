import express from "express";
import ArtigosController from "../http/controllers/ArtigosController";
import { body } from "express-validator";
import { validate } from "../http/middlewares/ValidateMiddleware";

const router = express.Router();

router.get("/:id", ArtigosController.getById);
router.get("/", ArtigosController.getAll);
router.post(
    "/",
    validate([
        body("nome")
            .notEmpty()
            .withMessage("Obrigatório informar o nome da categoria"),
        body("descricao")
            .notEmpty()
            .withMessage("Obrigatório informar o descricao da categoria"),
        body("conteudo")
            .notEmpty()
            .withMessage("Obrigatório informar o conteudo da categoria"),
        body("ativo")
            .notEmpty()
            .isBoolean()
            .withMessage("Obrigatório informar o ativo da categoria"),
        body("ordem")
            .notEmpty()
            .isInt()
            .withMessage("Obrigatório informar o ordem da categoria"),
    ]),
    ArtigosController.create,
);
router.delete("/:id", ArtigosController.delete);

export default router;