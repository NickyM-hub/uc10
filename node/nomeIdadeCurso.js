const readline = require('readline');


const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pergunta.question("Qual seu nome? ", (nome) => {
    pergunta.question("Qual sua idade? ", (idade) => {
        pergunta.question("Qual curso você faz? ", (curso) => {

            console.log(`\nNome: ${nome}\nIdade: ${idade}\nEstá cursando: ${curso}`)  
            
            pergunta.close();
        })
    })
})



