//armazenar funcao em variaaveis
const imprimirsoma = function(a, b){
console.log(a + b)
}

imprimirsoma(2, 3)

//armazenar em funcao arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))
const imprimir2 = a => console.log(a)
imprimir2("arrow")