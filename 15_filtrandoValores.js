const transacoes = [
    { tipo: 'entrada', valor: 100 },
    { tipo: 'saída', valor: 50 },
    { tipo: 'entrada', valor: 150 }
  ];
  
  let saldo = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldo += transacao.valor;
    } else {
      saldo -= transacao.valor;
    }
  });
  
  console.log('Saldo final:', saldo, "reais");