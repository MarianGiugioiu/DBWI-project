import express from 'express';
import chalk from 'chalk';
import { SequelizeService } from './config/db.js';

const app = express();

app.get('/health', (req, res) => {
    let sequelize = SequelizeService.getInstance();
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    res.send({
        message: 'Up and running'
    })
});

app.listen(4200, (err) => {
    err && console.error(err);
    console.log(chalk.magenta(`Server started on port`), chalk.yellow(4200));
});