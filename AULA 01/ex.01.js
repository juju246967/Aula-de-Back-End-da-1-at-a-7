const input = require("readline-sync");
let nome = input.question("digite seu nome:");
let idade = input.question("digite sua idade:");
let cidade = input.question("digite sua cidade:");

console.log("Olá, meu nome é " , nome , "tenho" , idade , "anos e moro em" , cidade ,);