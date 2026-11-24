
const readline = require('readline');

const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

pergunta.question("Digite a primeira nota: ", (valor1) => {
    pergunta.question("Digite a segunda nota: ", (valor2) => {

        let media = calcularMedia(Number(valor1), Number(valor2));
        console.log("Média:", media);

        if (media >= 7) {
            console.log("Aprovado");
        }
        else if (media >= 5) {
            console.log("Recuperação");
        }
        else {
            console.log("Reprovado");
        }

        pergunta.close();
    });
});