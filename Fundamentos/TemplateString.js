const nome = 'Milene'
const concatenação = 'ola ' + nome + '!'
const template = `
   ola 
    ${nome}!
   ja aprendeu templete string?`
console.log(concatenação, template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')} !`)