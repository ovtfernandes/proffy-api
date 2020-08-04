import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('acessou a rota');
});

const PORT = process.env.PORT || 3333;

app.listen(PORT);
