import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

export class SequelizeService {
    static #instance;
    
    static getInstance() {
        if (!SequelizeService.#instance) {
            SequelizeService.#instance = new Sequelize(
                process.env.PG_DB,
                process.env.PG_USER,
                process.env.PG_USER_PASSWORD,
                {
                    host: process.env.PG_HOST,
                    port: process.env.PG_PORT,
                    dialect: 'oracle',
                    operatorsAliases: false,
                    pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                    },
                    logging: false
                }
            )
        }
        return SequelizeService.#instance;
    }
}