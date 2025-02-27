const pessoa ={
    nome: "João",
    apresentarse: function (idade){
        console.log("Olá, eu sou o "+ this.nome +" eu tenho "+ idade +" anos");
    }
}

pessoa.apresentarse(25);

const pessoa2 ={
    nome: "Maria"
}

pessoa.apresentarse.bind(pessoa2)(30);

pessoa.apresentarse.call(pessoa2, 30);
// mesmo a funcao aceitando apenas um parametro, o primeiro na chamada call é referente ao this

const funcaoComBind = pessoa.apresentarse.bind(pessoa2);
funcaoComBind(28);
funcaoComBind(12);

const funcaoComCall = pessoa.apresentarse.call(pessoa2, 32);
funcaoComCall;