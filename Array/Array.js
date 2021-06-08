let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


aprovados = ['bia' , 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
aprovados[3] = 'Paulo' //adicionar elemento no array

aprovados.push('Abia') //adicionar elemento o array

console.log(aprovados.length)
console.log(aprovados)


aprovados[9] = 'Rafael'
//valores entre 5 e 8 viram undefined
console.log(aprovados.length)


console.log(aprovados[8] === undefined)


console.log(aprovados)


aprovados.sort() //ordenação

console.log(aprovados)


delete aprovados [1]
aprovados.sort()
console.log(aprovados)



aprovados = ['BIA' , 'CARLOS' , 'ANA']
//splice (1,2) a partir do 1 elemento deleta 2
aprovados.splice(1, 1) //excluir
aprovados.splice (1, 0, 'elemento1' , 'elemento2') //adicionar

console.log(aprovados)