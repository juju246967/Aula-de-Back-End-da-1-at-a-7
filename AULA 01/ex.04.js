const input = require("readline-sync");
let tabuada = input.questionInt("Digite um numero de 1 a 10:");

for(let i=0; i<=10; i++){
    console.log(tabuada + "X" + i + "=" + (tabuada*i));
}