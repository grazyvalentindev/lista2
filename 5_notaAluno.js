// Criando um array de objetos alunos
const alunos = [
    { nome: 'Ana', nota1: 5, nota2: 7 },
    { nome: 'Bruno', nota1: 9, nota2: 6 },
    { nome: 'Carla', nota1: 7, nota2: 4 }
  ];
  
  // Calculando e exibindo a média de cada aluno
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
  }