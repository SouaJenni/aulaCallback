const objetoTeste: tipoObjetoTeste = {
    nome: 'João',
    idade: 24,
    salario: 1500.00,
    casado: false,
    filhos: ['Maria', 'José'],
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 0,
        bairro: 'Centro'
    },
    dizerOla: () => {
        console.log("Olá!");
    }
}

type tipoObjetoTeste = {
    nome: string,
    idade: number,
    salario: number,
    casado:boolean,
    filhos: string[],
    endereco: {
        rua: string,
        numero: number,
        bairro: string
    },
    dizerOla: () => void;
}

function somar(a: number, b: number): number{
    return a + b;
}

function calcular(a: number, b: number, operacao:(a, b)=>number):void{
    console.log("Resultado é: "+ operacao(a, b));
}

calcular(10, 5, somar);
//Não funciona:
//calcular(10, 5, objetoTeste.dizerOla);