'use strict';

require("dotenv").config();

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        const password = await bcrypt.hash("123456", parseInt(process.env.BCRYPT_SALT));

        await queryInterface.bulkInsert("users", [
        {
            name: "admin",
            username: "admin",
            email: "admin@email.com",
            password: password,
        },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", null, {});
    }
};