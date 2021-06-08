var peso1 = 1.0
var peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) 

const avaliacao1 = 8.238
const avaliacao2 = 5.23
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(total)
console.log(typeof (media))

