var numeros = [12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979];
var soma = 0;
var media;

function calcularMedia() {
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    media = soma / numeros.length;
    console.log(`Média: ${media}`);
}

calcularMedia();
