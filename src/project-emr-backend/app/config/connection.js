require("dotenv").config();
const config = require("./db.config");

const Sequelize = require("sequelize");

module.exports =process.env.JAWSDB_URL ? 
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(
        config.DB,
        config.USER,
        config.PASSWORD,
        {
            host: config.HOST,
            dialect: config.dialect,
            operatorsAliases: false,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            }
        }
    );