const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 50 },
    { nome: 'Tênis', preco: 80 }
];

produtos.forEach(produto => {
    const valorInicial = produto.preco;
    const desconto = valorInicial * 0.1;
    const precoFinal = valorInicial - desconto;

    console.log(`${produto.nome}:`);
    console.log(`  Valor inicial: R$ ${valorInicial.toFixed(2)}`);
    console.log(`  Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`  Preço final: R$ ${precoFinal.toFixed(2)}`);
});
