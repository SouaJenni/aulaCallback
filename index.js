const objetoTeste = { //JSON
    nome: 'João', // String
    idade: 24, //Int
    salario: 1500.00, //Float
    casado: false, //Boolean
    filhos: ['Maria', 'José'], //Vetor
    endereco: { //Objeto
        rua: 'Rua dos Bobos',
        numero: 0,
        bairro: 'Centro'
    },
    dizerOla: () => { //Função
        console.log("Olá!");
    }
}

console.log("O nome é: " + objetoTeste.nome);
console.log("A idade é: " + objetoTeste.idade);
console.log("O salário é: " + objetoTeste.salario);
console.log("É casado? " + objetoTeste.casado);
console.log("Filhos " + objetoTeste.filhos);
console.log("O endereço é: " + JSON.stringify(objetoTeste.endereco));
console.log("O dizer olá é: ");
objetoTeste.dizerOla();

console.log("-----------------------------");

function somar(a, b){
    console.log("Soma: " +a+ "+" +b);
    return a + b;
}

function subtrair(a, b){
    console.log("Subtrai: " +a+ "-" +b);
    return a - b;
}

function multiplicar(a, b){
    console.log("Multiplica: " +a+ "x" +b);
    return a * b;
}

function calcular (a, b, operacao){
    const resultado =  operacao(a, b);
    console.log("Resultado: "+ resultado);
}

calcular(10, 5, somar);
calcular(10, 5, subtrair);
calcular(10, 5, multiplicar);
calcular(10, 5,(a, b) =>{
    console.log("Dividir "+ a +"/"+ b);
    return a / b;
});
calcular(10, 5, () => {
    console.log("A resposta para a Vida, o Universo e Tudo Mais é...");
    return 42;
})

