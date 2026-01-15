import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: (process.env.DB_DIALECT || "postgres") as any,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    schema: process.env.DB_SCHEMA || "public",
    port: parseInt(process.env.DB_PORT || "5432"),
    logging: false,
});

export default sequelize;