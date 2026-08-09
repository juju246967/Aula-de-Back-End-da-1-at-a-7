const input = require("readline-sync");

const produtos = [
    { id: 1, nome: "Borracha", preco: 5.43 },
    { id: 2, nome: "Lapis", preco: 7.20 },
    { id: 3, nome: "Apontador", preco: 4.32 },
    { id: 4, nome: "Caderno", preco: 7.50 }
];

for (let i = 0; i < produtos.length; i++) {
  console.log(
    `ID: ${produtos[i].id}, Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco}`
  );
}

let check = input.question("Gostaria de adicionar um novo produto? (digite S para sim) ");

if (check.toLowerCase() === "s") {
    let nomeplaceholder = input.question("Qual o nome do produto? ");
    let valorplaceholder = input.questionFloat("E o preco? ");

    produtos.push({
        id: produtos.length + 1,
        nome: nomeplaceholder,
        preco: valorplaceholder
    });
}

console.clear();

console.log("--- Nova lista de produtos atualizada ---");
for (let i = 0; i < produtos.length; i++) {
  console.log(
    `ID: ${produtos[i].id}, Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco}`
  );
}

console.log("Novo tamanho do array: ", produtos.length);

console.log("\n=================================");
console.log("      RESULTADOS DO EX 03        ");
console.log("=================================");

const produtoId3 = produtos.find(produto => produto.id === 3);

if (produtoId3) {
    console.log(`Produto com ID 3 encontrado: ${produtoId3.nome}`);
} else {
    console.log("Produto com ID 3 não foi encontrado.");
}

console.log("---------------------------------");

const produtosAcimaDe50 = produtos.filter(produto => produto.preco > 50.00);

console.log("Produtos com preço acima de R$ 50,00:");
if (produtosAcimaDe50.length > 0) {
    console.log(produtosAcimaDe50);
} else {
    console.log("Nenhum produto está acima de R$ 50,00.");
}