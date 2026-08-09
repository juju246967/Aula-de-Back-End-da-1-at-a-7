const input = require('readline-sync');

function soma(num1, num2) {
    return num1+num2;
}
function sub(num1, num2) {
    return num1-num2;
}
function mult(num1, num2) {
    return num1*num2;
}
function div(num1, num2) {
    if(num2 === 0) {
        return "Tente novamente";
    } else {
        return num1/num2;
    } 
}

const n1 = input.question("Digite o primeiro numero: ");
const n2 = input.question("Digite o segundo numero: ");

console.log(`soma: ${soma(Number(n1), Number(n2))}`);
console.log(`subtração: ${sub(Number(n1), Number(n2))}`);
console.log(`multiplicação: ${mult(Number(n1), Number(n2))}`);
console.log(`divisão: ${div(Number(n1), Number(n2))}`);