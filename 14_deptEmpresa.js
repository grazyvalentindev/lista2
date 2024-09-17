const empresa = {
    departamentos: [
      {
        nome: 'Marketing',
        funcionarios: ['João', 'Maria', 'Pedro']
      },
      {
        nome: 'Desenvolvimento',
        funcionarios: ['Ana', 'Bruno', 'Carla']
      }
    ]
  };
  

  for (const departamento in empresa.departamentos) {
    console.log(`Departamento: ${empresa.departamentos[departamento].nome}`);
  
    for (const funcionario of empresa.departamentos[departamento].funcionarios) {
      console.log(`  Funcionário: ${funcionario}`);
    }
  }