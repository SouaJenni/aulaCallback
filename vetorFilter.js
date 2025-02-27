const notas = [77, 65, 52, 89, 36, 71, 90];
const aprovados = [];

for(let i = 0; i< notas.length; i++){
    if(notas[i] >= 60){
        aprovados.push(notas[i]);
    }
}

console.log("Os aprovados são: " + aprovados);

const aprovados2 = notas.filter((nota)=> nota >= 60);
console.log("Os aprovados são: " + aprovados2);

function filtrarNota(nota){
    return nota >= 60;
}

const aprovados3 = notas.filter(filtrarNota);
console.log("Os aprovados são: " + aprovados3);

const alunos =[
    {nome: "João", nota: 77},
    {nome: "Maria", nota: 65},
    {nome: "José", nota: 52},
    {nome: "Ana", nota: 89},
    {nome: "Carlos", nota: 36},
    {nome: "Mariana", nota: 71},
    {nome: "Paulo", nota: 90},
]

const aprovados4 = alunos.filter((aluno) => aluno.nota >= 70);
console.log("Os aprovados são: "+ JSON.stringify(aprovados4));

const nomesAprovados = aprovados4.map((aluno) => aluno.nome);
// mapeia um vetor para um novo formato
console.log("Os nomes aprovados são: "+nomesAprovados);

const notaAte10 = aprovados4.map((aluno) => {
    return {
        nome: aluno.nome,
        nota: aluno.nota / 10
    }
});

console.log("nota até 10: " + JSON.stringify(notaAte10));

