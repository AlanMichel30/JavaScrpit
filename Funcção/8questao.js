function encontrarMenorNumero(vetor) {
    if (vetor.length === 0) {
        return undefined; // Retorna undefined se o vetor estiver vazio
    }
    
    let menor = vetor[0]; // Assume que o primeiro elemento é o menor

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > menor) {
            menor = vetor[i]; // Atualiza o menor número se encontrar um menor
        }
    }

    return menor;
}

// Exemplo de uso:
const vetor = [10, 5, 8, 3, 12, 6];
console.log("O menor número no vetor é:", encontrarMenorNumero(vetor));
