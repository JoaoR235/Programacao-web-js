// Carrega framework express
const express = require('express');

const calculadora = require('./calculadora')

// Cria um app usando a função express()
const app     = express();

const PORT = 8080;

const LOG = [];

app.get('/', (req, res) => {
    res.send('<h1>Olá, mundo!</h1> <p>estou na web...</p>');
});

app.get('/calculadora/somar/:a/:b', (req, res) => {
    let a = Number(req.params.a)
    let b = Number(req.params.b)
    let resultado = calculadora.somar(a, b);
    res.send(`<h1>${a} + ${b} = ${resultado}<h1>`);
    LOG.push(string_resultado);
    res.send(string_resultado);
});

app.get('/calculadora/log', (req, res) => {
    resultado = "";
    LOG.forEach(log => {
        resultado += LOG;
    })
    res.send(resultado)
});

app.listen(PORT, () => {
    console.log('app rodando na porta' + PORT)
});