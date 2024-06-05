var alturas = [1.35, 1.50, 1.65, 1.77, 1.80];
var pesos = [65, 70, 72, 75, 78];

for(var i = 0; i < 5; i++){
    var imc = pesos[i] / Math.pow(alturas[i],2);
    console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é ${imc.toFixed(2)}`);
}

