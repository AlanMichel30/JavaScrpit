var numeros = [12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979];

function extrairPares(numeros) {
    var pares = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
            if (pares.length === 7) {
                break;
            }
        }
    }
    return pares;
}

var numerosPares = extrairPares(numeros);
console.log('Números pares:', numerosPares);
