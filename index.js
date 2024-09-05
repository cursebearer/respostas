const readlineSync = require('readline-sync');

// 1
function fibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === n || n === 0;
}

function testarFibonacci() {
    const numero = parseInt(readlineSync.question('Informe um numero: '));

    if (fibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
}


// 2
function acharA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

function testarAcharA() {
    const string = readlineSync.question('Informe uma string: ');
    const quantidade = acharA(string);

    console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);
}


// 3
function soma() {
    let INDICE = 12, SOMA = 0, K = 1;

    while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);
}

//4

function sequencias() {
    console.log('a) 1, 3, 5, 7, 9');
    console.log('b) 2, 4, 8, 16, 32, 64, 128');
    console.log('c) 0, 1, 4, 9, 16, 25, 36, 49');
    console.log('d) 4, 16, 36, 64, 100');
    console.log('e) 1, 1, 2, 3, 5, 8, 13');
    console.log('f) 2, 10, 12, 16, 17, 18, 19, 20');
}


//sequencias()
//soma()
//testarAcharA()
// testarFibonacci()