// Carrega framework express
const express = require('express');

// Cria um app usando a função express()
const app     = express();

const PORT = 8080;

app.get('/', function(req, res){
    res.send('<h1>Olá, mundo!</h1> <p>estou na web...</p>');
});

app.get('/bem-vindo', function(req, res){
    res.send('<h1>Bem vindo ao desenvolvimeto web</h1>');
});

app.listen(PORT, () => {
    console.log('app rodando na porta' + PORT)
})