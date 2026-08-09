const input = require("readline-sync");
let soma = 0;

for(let i=0; i<5; i++){
    let nota = Number(input.question("digite a " + (i+1) + " nota: " ));
    soma = soma + nota;
}

let media = soma/5;

console.log("Soma:", soma);
console.log("Média:", media);

if(media >= 7){
    console.log("Aprovado!");
}else if(media >= 5){
    console.log("Recuperação!");
}else{
    console.log("Reprovado");
}