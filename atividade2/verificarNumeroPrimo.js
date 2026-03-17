function verificarNumeroPrimo(n){
    let primo = true;

    if ((n != 2) && (n % 2 == 0)){
        primo = false;
    }

    for(let i = 3; i < n  ; i += 2) {
        if (n % i == 0) {

        }
    }

    return primo;
}

console.log(`primo(0) = ${verificarNumeroPrimo(0)}`);
console.log(`primo(1) = ${verificarNumeroPrimo(1)}`);
console.log(`primo(2) = ${verificarNumeroPrimo(2)}`);
console.log(`primo(3) = ${verificarNumeroPrimo(3)}`);
console.log(`primo(7) = ${verificarNumeroPrimo(7)}`);
console.log(`primo(83) = ${verificarNumeroPrimo(83)}`);
console.log(`primo(100) = ${verificarNumeroPrimo(100)}`);
console.log(`primo(991) = ${verificarNumeroPrimo(991)}`);
console.log(`primo(104729) = ${verificarNumeroPrimo(104729)}`);
console.log(`primo(14348907) = ${verificarNumeroPrimo(14348907)}`);
