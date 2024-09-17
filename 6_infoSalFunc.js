// Criando um array de objetos funcionários
const funcionarios = [
    { nome: 'André', cargo: 'Desenvolvedor', salario: 8000 },
    { nome: 'Beatriz', cargo: 'Designer', salario: 4500 },
    { nome: 'Carlos', cargo: 'Gerente', salario: 6000 }
  ];
  
  // Filtrando e exibindo funcionários com salário maior que 5500
  const salarioMinimo = 5500;
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
  }