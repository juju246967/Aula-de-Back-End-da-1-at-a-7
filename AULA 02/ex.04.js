const input = require('readline-sync');

const exOp = (num1, num2, op) => {
    const resultado = op(num1, num2);
    console.log(`Resultado: ${resultado}`);
};

const n1 = input.question("Digite o primeiro numero: ");
const n2 = input.question("Digite o segundo numero: ");

exOp(Number(n1), Number(n2), (num1, num2) => num1+num2);
exOp(Number(n1), Number(n2), (num1, num2) => num1*num2);
exOp(Number(n1), Number(n2), (num1, num2) => num1-num2);