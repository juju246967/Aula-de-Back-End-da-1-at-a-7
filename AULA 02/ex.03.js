const input = require('readline-sync');

const soma = (num1, num2) => num1+num2;
const sub = (num1, num2) => num1-num2;
const mult = (num1, num2) => num1*num2;
const div = (num1, num2) => {
    if(num2 === 0) {
        return "Numero invalido, escolha outro";
    } else {
        return num1/num2;
    }
};

const n1 = input.question("Digite o primeiro numero: ");
const n2 = input.question("Digite o segundo numero: ");

console.log(`soma: ${soma(Number(n1), Number(n2))}`);
console.log(`subtração: ${sub(Number(n1), Number(n2))}`);
console.log(`multiplicação: ${mult(Number(n1), Number(n2))}`);
console.log(`divisão: ${div(Number(n1), Number(n2))}`);