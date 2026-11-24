const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function gerarTabuada() {
  const rl = readline.createInterface({ input, output });
  let numero = null;

  while (numero === null) {
    const resposta = await rl.question('Digite um número inteiro: ');
    const texto = resposta.trim();

    if (/^-?\d+$/.test(texto)) {
      numero = Number.parseInt(texto, 10);
    } else {
      console.log('Entrada inválida! Digite apenas um número inteiro.\n');
    }
  }

  rl.close();

  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

gerarTabuada();
    