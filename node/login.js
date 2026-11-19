const readline = require('readline');

const pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// DESAFIO - login e senha


let usuario = 'admin';
let senha = '1234';

pergunta.question("Digite seu login: ", (login) => {
    pergunta.question("Digite sua senha de acesso: ", (acesso) => {
        if (login != usuario || acesso != senha) {
            console.log("Acesso negado, usuário ou senha incorretos!")
        }
        else {
            console.log("Acesso permitido")
        }
        pergunta.close();
    })
})