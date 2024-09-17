const carrinho = {
    itens: [
      { nome: "Banana", quantidade: 2, precoUnitario: 3.5 },
      { nome: "Maçã", quantidade: 5, precoUnitario: 2 }
    ]
  };
  
  let valorTotal = 0;
  
  carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
  });
  
  console.log("Valor total do carrinho:", valorTotal, "reais");