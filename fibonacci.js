
const numero = 4;

function gerarSequenciaFibonacci(limite) {
    let sequencia = [0, 1];
    let proximo = sequencia[0] + sequencia[1];

    while (proximo <= limite) {
        sequencia.push(proximo);
        proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    }

    return sequencia;
}

function pertenceASequenciaFibonacci(numero, sequencia) {
    return sequencia.includes(numero);
}


const sequenciaFibonacci = gerarSequenciaFibonacci(numero);


const pertence = pertenceASequenciaFibonacci(numero, sequenciaFibonacci);


if (pertence) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}