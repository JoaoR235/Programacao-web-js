const express = require('express');
const mustacheExpress = require('mustache-express');
const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post('/agendamento', (req, res) => {
    const agendamento = req.body;

    
    const dadosObrigatotorios = ['nome', 'sobrenome', 'cpf', 'nascimento', 'telefone', 'cep', 'endereco', 'clinica', 'especialidade', 'data', 'hora'];
    for (let campo of dadosObrigatotorios) {
        if (!agendamento[campo] || agendamento[campo].trim() === "") {
            return res.send(`<h2>Erro: O ${campo} deve ser preenchido.</h2><a href="/">Voltar</a>`);
        }
    }
 
    const dtConsulta = new Date(agendamento.data + 'T00:00:00');
    const hj = new Date();
    hj.setHours(0, 0, 0, 0);

    if (dtConsulta <= hj) {
        return res.send(`<h2>Erro: A consulta após o dia de hj.</h2><a href="/">Voltar</a>`);
    }

    res.render('agendamento.html', { agendamento });
});

app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});