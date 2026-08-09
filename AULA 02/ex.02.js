const input = require('readline-sync');

function vS(senha) {
    return senha.length >= 8;
}
let senha = input.question("Digite sua senha: ");

while (!vS(senha)) {
    console.log("Sua senha precisa de no minimo 8 digitos");
    senha = input.question("Digite a senha: ");
}

console.log("Senha correta");