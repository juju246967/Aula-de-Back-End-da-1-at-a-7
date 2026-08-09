const alunos = [
  { id: 1, nome: "Bruna", nota: 10.0 },
  { id: 2, nome: "Eduarda", nota: 9.0 },
  { id: 3, nome: "Emanueli", nota: 6.7 },
  { id: 4, nome: "Emilly", nota: 7.5 },
  { id: 5, nome: "Enzo", nota: 8.9 }
]

const novoArray = alunos.map(a => {

  let situacao;

  if (a.nota > 7) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  return {
    nome: a.nome,
    nota: a.nota,
    situacao: situacao
  };
});