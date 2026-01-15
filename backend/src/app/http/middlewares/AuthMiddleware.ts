import BaseMiddleware from "../../classes/BaseMiddleware";

import jwt from "jsonwebtoken";
import Usuarios from "../models/Usuarios";

class AuthMiddleware extends BaseMiddleware {
    public async handle() {
        const token = this.req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "");

        if (!token || !decoded) {
            this.res.status(401).json("Unauthorized");
            return;
        }

        const user = await Usuarios.findByPk((decoded as any).sub);

        if (!user) {
            this.res.status(401).json("Unauthorized");
            return;
        }

        this.req.user = user;

        this.next();
    }
}

export default AuthMiddleware;