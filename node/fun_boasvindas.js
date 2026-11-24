const readline = require('readline');

const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function boasVindas(nome) {
    console.log(`Bem-vindo(a), ${nome}!`);
}

pergunta.question("Digite seu nome: ", (nome) => {

    boasVindas(nome);

    pergunta.close();
});