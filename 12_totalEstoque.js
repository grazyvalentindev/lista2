const estoque = [
    { produto: "Lâmpada", quantidade: 5, minimo: 10 },
    { produto: "Pilha", quantidade: 20, minimo: 15 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2; // Duplica a quantidade
    }
  });
  
  console.log(estoque);