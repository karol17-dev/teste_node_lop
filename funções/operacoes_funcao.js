const opcao = require('readline-sync');
const primNum = require('readline-sync');
const segNum = require('readline-sync');

const pergunta = Number(opcao.question('Digite a operação que você deseja efetuar: 1. Adição; 2. Subtração; 3. Multiplicação; 4. Divisão.'));

function adi() {
    const num1 = Number(primNum.question('Digite o primeiro número: '));
    const num2 = Number(segNum.question('Digite o segundo número: '));
    let resultado1 = num1 + num2;
    return (resultado1)
}

function sub() {
    const num1 = Number(primNum.question('Digite o primeiro número: '));
    const num2 = Number(segNum.question('Digite o segundo número: '));
    let resultado2 = num1 - num2;
}

function mult() {
    const num1 = Number(primNum.question('Digite o primeiro número: '));
    const num2 = Number(segNum.question('Digite o segundo número: '));
    let resultado3 = num1 * num2
}

function div() {
    const num1 = Number(primNum.question('Digite o primeiro número: '));
    const num2 = Number(segNum.question('Digite o segundo número: '));
    let resultado4 = num1 / num2
}



