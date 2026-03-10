function calcularIMC(peso, altura) {
    let valorIMC = peso / (altura ** 2);
    let categoriaIMC;
    if(valorIMC < 18.5) {
        categoriaIMC = "Baixo peso.";
    }
    else if(valorIMC >= 18.5 && valorIMC < 24.9) {
        categoriaIMC = "Peso normal";
    } 
    else if(valorIMC >= 25 && valorIMC < 29.9) {
        categoriaIMC = "Excesso de peso";
    }
    else if(valorIMC >= 30 && valorIMC < 35) {
        categoriaIMC = 'Obesidade'
    }
    else {
        categoriaIMC = '';
    }
    let IMC = {
        valor: valorIMC,
        categoria: categoriaIMC
    }
    console.log(`Peso = ${peso}, Altura = ${altura}, IMC.valor = ${IMC.valor.toFixed(2)}, IMC.categoria = ${IMC.categoria}`);


}

calcularIMC(80, 1.8);