var entrada = require ("readline-sync")


while(pergunta != "nao"){

    var numero1 = parseFloat( entrada.question("Escolha o primeiro numero: "));
    var calculo = entrada.question('Escolha uma operacao: adicao, subtracao, divisao, multiplicacao, potenciacao, radiciacao ').toLowerCase()

    switch( calculo ){
        case "adicao":
            console.log('soma');
            var numero2 = parseFloat( entrada.question("Escolha o segundo numero: "));
            var soma = numero1 + numero2
            console.log(`O resultado e: ${soma}`);
            break
        
        case "subtracao":
            console.log('subtracao');
            var numero2 = parseFloat( entrada.question("Escolha o segundo numero: "));
            var subtracao = numero1 - numero2
            console.log(`O resultado e: ${subtracao}`);
            break

        case "divisao":
            var numero2 = parseFloat( entrada.question("Escolha o segundo numero: "));
            console.log('divisao');
            var divisao = numero1 / numero2
            console.log(`O resultado e: ${divisao}`);
            break
        
        case "multiplicacao":
            var numero2 = parseFloat( entrada.question("Escolha o segundo numero: "));
            console.log('multiplicacao');
            var multiplicacao= numero1 * numero2
            console.log(`O resultado e: ${multiplicacao}`);
            break

        case "potenciacao":
            var numero2 = parseFloat( entrada.question("Escolha o segundo numero: "));
            console.log('potenciacao');
            var potenciacao= Math.pow( numero1, numero2) 
            console.log(`O resultado e: ${potenciacao}`);
            break

        case "radiciacao":
            console.log('radiciacao');
            var radiciacao= Math.sqrt( numero1)
            console.log(`O resultado e: ${radiciacao}`);
            break

        default: 
            console.log('Opcao invalida')
            break
            

    
    }
    
    while(pergunta != "nao" ){
        var pergunta = entrada.question('Deseja continuar "sim/ nao"?').toLowerCase();

        if( pergunta == "nao"){
                console.log("Voce decidiu encerrar");
                break
        }
        else if( pergunta == "sim"){
            console.log("Voce decidiu continuar");
            break
        }
        else{
            console.log("Opcao invalida")
        }

    }
    
}