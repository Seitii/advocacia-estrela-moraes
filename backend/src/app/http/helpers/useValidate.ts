import { RequestHandler } from "express";
import { ValidationChain, validationResult } from "express-validator";

function useValidate(...validations: ValidationChain[]): RequestHandler {
    const handler: RequestHandler = async (req, res, next) => {
        for (const validation of validations) {
            await validation.run(req);
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json(errors.array());
            return;
        }

        next();
    };

    return handler;
}

(global as any).useValidate = useValidate;

export default useValidate;
