const path = require("path");

require("dotenv").config({
    path: path.resolve(__dirname, "../../../.env")
});

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": String(process.env.DB_PASSWORD),
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "port": Number(process.env.DB_PORT || 5432),
        "dialect": process.env.DB_DIALECT,
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
