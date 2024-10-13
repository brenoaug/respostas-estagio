
const texto = "Tem quantas letras 'a' nesta frase?.";

function contarOcorrenciasDeA(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}


const ocorrencias = contarOcorrenciasDeA(texto);


console.log(`A letra 'a' ocorre ${ocorrencias} vezes na string.`);