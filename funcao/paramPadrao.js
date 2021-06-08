//estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1 
    c = c || 1
return a + b + c
}

console.log(soma1(2))

// estrategia 2, 3, 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // a é diferente de indefinido ?  então a = 1
    b = 1 in arguments ? b : 1 // dentro de arguments existe o valor b ? "indice 1" se exsitir pegue valor b senão pegue valor 1
    c = isNaN (c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrao do es2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3())