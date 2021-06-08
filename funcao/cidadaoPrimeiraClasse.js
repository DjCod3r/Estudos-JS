//Função em Js é First-Class Object (Citizens)
//High-Order Funcion

//Criar de Forma Literal
function funcao1() { }


//Armazenar em uma Variavel
const fun2 = function() {}

//Armazenar em um Array
const Array = [function(a, b){return a + b}, funcao1, fun2] // função pode ser criada ou atribuida a um Array
console.log(Array[0](2,3))

//Armazenar em um Objeto

const obj = {}
obj.falar = function(){return "epa"}
console.log(obj.falar())

// Passar função como param

function run(fun){
    fun()
}

run(function(){console.log("executando")})


//função pode retornar/conter outra função

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(1, 2)(4)