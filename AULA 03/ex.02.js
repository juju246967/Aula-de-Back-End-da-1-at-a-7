const input = require("readline-sync")

const produtos = [
    {id: 1, nome: "Borracha", preco: 2.99 },
    {id: 2, nome: "Lapis", preco: 1.50},
    {id: 3, nome: "Apontador", preco: 3.50},
    {id: 4, nome: "Caderno", preco: 20.99}
]

for (let i = 0; i < produtos.length; i++) {
  console.log(
    `ID: ${produtos[i].id}, Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco}`
  );
}

let check = input.question("Gostaria de adicionar um novo produto? (digite S para sim) ")

if(check.toLowerCase() === "s") {
    let nomeplaceholder = input.question("Qual o nome do produto? ")
    let valorplaceholder = input.questionFloat("E o preco? ")

    produtos.push({
        id: produtos.length + 1,
        nome: nomeplaceholder,
        preco: valorplaceholder
    })
}

console.clear();

console.log("--- Nova lista de produtos atualizada ---")

for (let i = 0; i < produtos.length; i++) {
  console.log(
    `ID: ${produtos[i].id}, Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco}`
  );
}

console.log("Novo tamanho do array: ", produtos.length)