import cors from "cors";

const corsOptions = {
    origin: "*", // permite todas as origens
    methods: ["GET", "POST", "PUT", "DELEETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    //credentials: true // somente se usa cookies/autenticação 
};

export default cors(corsOptions);