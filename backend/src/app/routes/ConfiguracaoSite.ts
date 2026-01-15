import express from "express";
import ConfiguracaoSiteController from "../http/controllers/ConfiguracaoSiteController";
import { body } from "express-validator";
import { validate } from "../http/middlewares/ValidateMiddleware";

const router = express.Router();

router.get("/", ConfiguracaoSiteController.getAll);
router.post("/", validate([
    body("telefone")
        .notEmpty()
        .withMessage("Obrigatório informar o telefone"),
    body("whatsapp")
        .notEmpty()
        .withMessage("Obrigatório informar o whatsapp"),
    body("email")
        .optional(),
    body("endereco")
        .optional()
]), ConfiguracaoSiteController.create);

export default router;