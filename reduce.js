const vetor =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somarTodos = vetor.reduce((acumulador, valorAtual)=> {
    return acumulador + valorAtual;
}, 0);

const maiorValor = vetor.reduce((acumulador, valorAtual)=> {
    if(acumulador < valorAtual){
        return valorAtual;
    }
    return acumulador;
}, vetor[0]);

console.log("Resultado: ", somarTodos);
console.log("Resultado: ", maiorValor);