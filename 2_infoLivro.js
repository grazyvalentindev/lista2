const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
};

let propriedadeExiste = false;
for (let propriedade in livro) {
    if (propriedade === "editora") {
        propriedadeExiste = true;
        break;
    }
}

if (!propriedadeExiste) {
    livro.editora = "Martins Fontes";
}

console.log(livro);