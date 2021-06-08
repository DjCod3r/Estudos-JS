var isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 0
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!undefined)
console.log(!!NaN)
console.log(!!null)
console.log(!!'')
console.log(!!0)


console.log('finalização...')
console.log(('' || null || ' acerto')) //o valor verdadeiro é o unico que aparece.

var nome = ""

console.log(nome || "sem nome") // caso a variavel , esteja vazia, o valor pré definido dela é sem nome