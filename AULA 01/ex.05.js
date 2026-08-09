const input = require("readline-sync");

let par = 0;
let impar = 0;

for(let i=0; i<10; i++){
    let num = Number(input.question("digite o primeito numero: "));

    if(num%2 === 0){
        par++;
        console.log("o numero é par" , par);
    }else{
        impar++;
        console.log("o numero é impar");
    }
}

console.log("os numeros pares foram " , par);
console.log("os numeros impares foram " , impar);