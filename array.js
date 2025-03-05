const numeros = [8, 7];

for(let i = 0; i < 10; i++){
    // numero[i] = Math.floor(Math.random() * 101);
    numeros.push(Math.floor(Math.random() * 101));
    // adiciona no final do vetor
}

const posicaoNumero7 = ()=>{
    for(let i; i <= 100; i++){
        if(numeros[i] === 7){
            return i;
        }
    }
}

const posicaoDo7 = numeros.indexOf(7);
//pega o index onde o 7 está

console.log("Vetor antes: ");
console.log(numeros);

const tamanho = numeros.length;
const ultimoNumero = numeros.pop();
// remove o último número do vetor

console.log("Vetor depois: ");
console.log(numeros);
console.log("Numero removido: ", ultimoNumero);

const primeiroNumero = numeros.shift(ultimoNumero);
// tira o primeiro numero

console.log("Vetor depois de depois: ");
console.log(numeros);

console.log("O primeiro numero era: ", primeiroNumero);

numeros.unshift(ultimoNumero);
// insere no começo do vetor
numeros.push(primeiroNumero);