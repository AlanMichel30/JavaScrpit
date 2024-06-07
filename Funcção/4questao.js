function imc(altura, peso){
   var Imc = peso /Math.pow(altura, 2);
   console.log(Imc.toFixed(2));
}
imc(1.70, 60);  