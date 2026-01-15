import express from "express";
import AtuacoesController from "../http/controllers/AtuacoesController";
import { body } from "express-validator";
import { validate } from "../http/middlewares/ValidateMiddleware";

const router = express.Router();

router.get("/:id", AtuacoesController.getById);
router.get("/", AtuacoesController.getAll);
router.post("/", validate([
    body("nome")
        .notEmpty()
        .withMessage("Obrigatório informar o nome"),
    body("descricao")
        .notEmpty()
        .withMessage("Obrigatório informar a descrição"),
    body("ativo")
        .notEmpty()
        .isBoolean()
        .withMessage("Obrigatório informar o ativo"),
    body("ordem")
        .notEmpty()
        .isInt()
        .withMessage("Obrigatório informar a ordem")
]), AtuacoesController.create);

export default router;