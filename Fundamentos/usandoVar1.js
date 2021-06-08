{{{
    var a = 1
    console.log(a) //chamando var , dentro de blocos é visivel
}}}

console.log(a) //chamando var, de fora do bloco é visivel

function teste (){
    var b = 3
    console.log(b)
}

teste()
console.log(b) //não é possivel chamar uma variavel , de fora do bloco de uma função que a var esteja relacionada  