const clientes = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 28, cidade: "Belo Horizonte" }
];

let contador = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${contador}`);