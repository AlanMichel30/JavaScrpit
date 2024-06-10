const entrada = require('readline-sync'); 

const num1 = parseFloat(entrada.question('Digite o primeiro numero: '));
const num2 = parseFloat(entrada.question('Digite o segundo numero: '));
const operador = entrada.question('Digite o operador (+, -, /, *): ');

operacao_aritmetica(num1, num2, operador);

function operacao_aritmetica(num1, num2, operador) {
    
    var resultado;
    var operacao;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            operacao = 'soma';
            break;
        case '-':
            resultado = num1 - num2;
            operacao = 'subtração';
            break;
        case '*':
            resultado = num1 * num2;
            operacao = 'multiplicação';
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
                operacao = 'divisão';
            } else {
                console.log('Erro: Divisão por zero não é permitida.');
                return;
            }
            break;
        default:
            console.log('Erro: Operador inválido. Use +, -, * ou /.');
            return;
    }

    console.log(`Operação: ${operacao}`);
    console.log(`Resultado: ${resultado}`);
}

