const alunos = [
    {nome: 'Lucas', nota: 6.7, bolsista: true},
    {nome: 'Alex', nota: 7.2, bolsista: false},
    {nome: 'Leticia', nota: 6.2, bolsista: false},
    {nome: 'Ana', nota: 8.5, bolsista: true}
]

const notaMaior = (resultado , nota) 
console.log(alunos.map(a => a.nota).reduce(notaMaior))