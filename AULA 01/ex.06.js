const input = require("readline-sync");

const secreto = 42;
let tentativas = 0;

while(true){
    let tentativas2 = input.questionInt("Digite o codigo:");
    tentativas++;

    if(tentativas2===secreto){
        console.log("codigo correto!");
        console.log("voce teve" , tentativas , "tentativas");
        break;
    }else{
        console.log("codigo errado, tente novamente");
    }
}