// Criando um array de objetos pessoas
const pessoas = [
    { nome: 'João', idade: 30, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 35, cidade: 'Belo Horizonte' }
  ];
  
  // Iterando sobre o array usando for of e exibindo as informações
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }