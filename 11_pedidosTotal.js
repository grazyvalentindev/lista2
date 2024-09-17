const pedidos = [
    { cliente: "João", produto: "Camiseta", quantidade: 2 },
    { cliente: "Maria", produto: "Calça", quantidade: 3 },
    { cliente: "João", produto: "Boné", quantidade: 1 }
  ];
  
  const agrupamentoPorCliente = {};
  
  pedidos.forEach(pedido => {
    if (!agrupamentoPorCliente[pedido.cliente]) {
      agrupamentoPorCliente[pedido.cliente] = 0;
    }
    agrupamentoPorCliente[pedido.cliente] += pedido.quantidade;
  });
  
  console.log(agrupamentoPorCliente); 