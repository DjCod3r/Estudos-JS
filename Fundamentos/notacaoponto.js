console.log(Math.ceil(6.1))

const pessoa = {}
pessoa.nome = 'joao'
pessoa.peso = 59
console.log(pessoa.peso, pessoa.nome)

function obj(nome) {
    this.alterador = nome

}

const obj2 = new obj('cadeira')
console.log(obj2)
const obj3 = new obj('mesa')
console.log(obj3)