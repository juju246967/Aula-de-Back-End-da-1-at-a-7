const input = require("readline-sync");

let n1 = Number(input.question("digite o primeiro numero: "));
let n2 = Number(input.question("digite o segundo numero: "));

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;

console.log("a soma é ", soma);
console.log("a subtração é ", subtracao);
console.log("a multiplicação é ", multiplicacao);

if (n2 === 0) {
    console.log("não será possivel realizar a divisão, escolha outro numero que não seja 0");
} else {
    console.log("a divisão é ", divisao);
}