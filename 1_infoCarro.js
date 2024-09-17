// Criando um objeto carro
const carro = {
    marca: "Ford",
    modelo: "Ranger",
    ano: 2022,
    cor: "Prata"
  };
  
  // Utilizando o for...in para iterar sobre as propriedades
  for (const propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }