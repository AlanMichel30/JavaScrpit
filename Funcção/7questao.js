const vetor = [10, 5, 8, 3, 12, 6];

function encontrarMenorNumero(vetor) {
    if (vetor.length === 0) {
        return ; 
    }
    
    var menor = vetor[0]; 

    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i]; 
        }
    }

    return menor;
}


console.log("O menor número no vetor é:", encontrarMenorNumero(vetor));