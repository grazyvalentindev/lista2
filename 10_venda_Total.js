const vendas = [
    { produto: "Camiseta", quantidade: 10, valor: 20 },
    { produto: "Calça", quantidade: 5, valor: 50 },
    { produto: "Tênis", quantidade: 3, valor: 100 }
];

let valorTotal = 0;

vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
});

console.log("Valor total das vendas:", valorTotal);