const produto = {
    nome: "Smartphone",
    preco: 2000,
    cor: "Preto",
    garantia: 12,
    memoria: 128
};

function filtrarPropriedades(objeto, valorMinimo) {
    const novoObjeto = {};
    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === 'number' && objeto[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }
    return novoObjeto;
}

const produtoFiltrado = filtrarPropriedades(produto, 100);
console.log(produtoFiltrado);