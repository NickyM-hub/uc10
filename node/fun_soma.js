const readline = require('readline');

const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somar(numero1, numero2) {
    return numero1 + numero2;
}

pergunta.question("Digite o primeiro número: ", (valor1) => {
    pergunta.question("Digite o segundo número: ", (valor2) => {

        let resultado = somar(Number(valor1), Number(valor2));

        console.log("Resultado da soma:", resultado);
        pergunta.close();
    });
});