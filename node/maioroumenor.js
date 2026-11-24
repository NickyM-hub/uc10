const readline = require('readline');

const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pergunta.question("Qual sua idade? ", (idade) => {
    
    if(idade < 16) {
        console.log("Não pode votar")
    }
    else if(idade >= 16 && idade < 18) {
        console.log("Voto opcional")
    }
    else {
        console.log("Voto obrigatório")
    }

    pergunta.close();
})
