const pessoa ={
    nome: "João",
    idade: 25,
    "endereço": "Rua dos bobos nº 0",
    "data de nascimento": "01/01/1997"
}

console.log(JSON.stringify(pessoa));

console.log("O nome é: " +pessoa.nome);
console.log("O endereço é: " +pessoa.endereço);
console.log("A data de nascimento é: " +pessoa["data de nascimento"]);
console.log("A idade é: " +pessoa["idade"]);

const variavel = "nome";
console.log(`a ${variavel} é: ${pessoa[variavel]}`);
// [] - acessa a variável de forma dinâmica

