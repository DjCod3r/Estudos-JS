const escola = [{
    nome: 'Turma n1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1,},
       { nome: 'Ana',
         nota: 5.8  }]
},  {
    nome: 'Turma n2',
    alunos: [{
        nome: 'Alex',
        nota: 4.2
    }, {
        nome: 'Maria',
        nota: 9.6
    }]
}]


const getNotaAluno = a => a.nota 
const getNotaTurma = t => t.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)