const pessoa ={
    nome: "João",
    apresentarse: function (){
        console.log("Olá, eu sou o "+ this.nome);
    }
}

pessoa.apresentarse();

const apresentarSe = pessoa.apresentarse;

apresentarSe();

const pessoa2 = {
    nome: "Maria"
}

const apresentarSe2 = pessoa.apresentarse.bind(pessoa2);
// bind -> "gruda" um novo contexto na função

apresentarSe2();

const pessoa3 = {
    nome: "José"
}

pessoa.apresentarse.bind(pessoa3)();
// pega a função, adiciona o novo contexto e chama ela


