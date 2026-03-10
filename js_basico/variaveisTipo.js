let nome = "João";
const sobrenome = 'Santos';
let templateString = `O meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

let A = 2;
let B = 5.56;
let C = -3.14;
const PI = 3.14;
let potencia = A ** C;

console.log(typeof A);
console.log(typeof C);
console.log(`${A}^${C} = ${potencia}`);

let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);

let E = verdadeiro && falso;
let Ou = verdadeiro || falso;
console.log(E);
console.log(Ou);

let maior_que = B > A;
console.log(`${B}>${A} = ${maior_que}`);

//Arrays
let numeros = [1, 3.14, -7, 99, 506.67];
console.log(`numeros[0] = ${numeros[0]}`);
console.log(`numeros[3] = ${numeros[3]}`);
console.log(typeof numeros);

//Object
let pessoa = {
    nome: 'João',
    cpf: 123,
    telefone: 61999999999
};
console.log(pessoa);
console.log(`pessoa.nome = ${pessoa.nome}`);