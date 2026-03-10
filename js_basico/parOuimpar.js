function verificarParidade(n) {
    if(n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function apresentarMensagemParidade(n) {
    let verificar = verificarParidade(n);
    if(verificar == true) {
        console.log(`${n} é par`);
    } else {
        console.log(`${n} é impar`);
    }
}

apresentarMensagemParidade(10);
apresentarMensagemParidade(11);