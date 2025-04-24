// Desenha uma moldura em uma frase

const readline = require('readline-sync');

const ch = '█';

function barra(qtde) {
    for (let i = 0; i < qtde+4; i++) {
        process.stdout.write(ch);
    }
}

const frase = readline.question('Digite uma frase: ');

barra(frase.length);

console.log(`\n${ch} ${frase} ${ch}`);

barra(frase.length)