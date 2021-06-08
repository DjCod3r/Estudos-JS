//função sem retorno
function imprimirsoma(a,  b){
    console.log(a + b)
}

imprimirsoma(2, 6)

//funcao com retorno
function soma(a, b =2){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))