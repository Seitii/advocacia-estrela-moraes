import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

import express from "express";
// import cors from "cors";
import CorsMiddleware from "./app/http/middlewares/CorsMiddleware";
import fs from "fs";

const app = express();
const port = Number(process.env.APP_PORT) || 3000;

// app.use(cors());
// app.use(cors({
//     origin: true,
//     credentials: true
// }));
// app.use(CorsMiddleware);
app.use(express.json());

const routesDirectory = path.join(__dirname, "app/routes");

fs.readdirSync(routesDirectory).forEach((file) => {
    if (file.endsWith(".js") || file.endsWith(".ts")) {
        const route = require(path.join(routesDirectory, file));
        const routePath = `/api/${file.replace(/\.(js|ts)$/, "")}`;
        app.use(routePath, route.default); 
    }
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});

