const pessoa = {
    nome: 'Rebeca',
    idade: 16,
    peso: 45
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valore])  => {
    console.log(`${chave}: ${valore}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2010'
})

pessoa.dataNascimento = '01/01/2012'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assing (ECMASript 2015)
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3 , a: 4}

const obj = Object.assign(destino,o1,o2)//concatena atributos de outros objs

console.log(destino)