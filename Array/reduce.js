const alunos = [
    {nome: 'Lucas', nota: 6.7,},
    {nome: 'Alex', nota: 7.2,},
    {nome: 'Leticia', nota: 6.2,},
    {nome: 'Ana', nota: 8.5,},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)