const filmes = [
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "O Iluminado", diretor: "Stanley Kubrick", anoLancamento: 1980 }
];

const titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes); // Saída: ["O Poderoso Chefão", "O Senhor dos Anéis: A Sociedade do Anel", "O Iluminado"]