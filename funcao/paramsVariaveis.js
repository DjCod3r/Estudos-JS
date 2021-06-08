function soma(){
    let soma = 0 // é possivel declarar parametros dentro da função
    for(i in arguments){  // arguments é um array dentro de funções
        soma += arguments[i] // somando valores declarados dentro da let soma
        
    }
return soma
}

console.log(soma(1, 2, 5))
