// src/types/express-serve-static-core/index.d.ts
import type User from "../../app/http/models/Usuarios";

declare module "express-serve-static-core" {
    interface Request {
        user?: User;
    }
}