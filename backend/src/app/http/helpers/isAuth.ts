import { RequestHandler } from "express";

import AuthMiddleware from "../middlewares/AuthMiddleware";
import useMiddleware from "./useMiddleware";

function isAuth(): RequestHandler {
    return useMiddleware(AuthMiddleware);
}

(global as any).isAuth = isAuth;

export default isAuth;
