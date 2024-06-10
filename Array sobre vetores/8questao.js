var entrada = require('readline-sync');

let pesos = [];
let maxPesos = 5;

for (let i = 0; i < maxPesos; i++) {
    let peso = parseFloat(entrada.question(`Digite o peso (${i + 1}/${maxPesos}): `));

    if (peso >= 43 && peso <= 55) {
        pesos.push(peso);
    } else {
        console.log('Peso fora do intervalo permitido (43-55 kg). Tente novamente.');
        i--; 
    }
}

console.log('Pesos armazenados:', pesos);