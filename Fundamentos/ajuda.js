// Operadores de comparação
/* > maior
*  >= maior ou igual
*  < menor
*  <= menor ou igual
*  === igualdade
*  !== desigualdade

* Operadores logicos
* E = &&
* OU = ||

*/
var carroTemGasolina = false
var dinheiroParaAbastecer = true
var irPraPraia = carroTemGasolina || dinheiroParaAbastecer
console.log(irPraPraia)

var notaDoDesafio = 98
if (notaDoDesafio >= 100){
console.log("aprovado")
}else { console.log("reprovado")

}
// estrutura condicional multiplas opições
var semaforo = "amarela"
if (semaforo === "Verde"){
 console.log("siga em frente")

} else if (semaforo === "amarela"){
console.log("o sinal ficara vermelho")
} else { console.log("pare")
/* se eu tiver entre 0 e 4 anos bebe
 entre 5 a 11 criança 
 12 - 17 adolecente 
 18+ adulto
 */
var idade = 18
if(idade < 5){
    console.log("bebe")
}else if(idade < 12){
    console.log("criança")
} else if(idade < 17){
    console.log("adolecente")
}else{
    console.log("adulto")
}







}
// estrutura de repetição com numeros
var numero = 7
for(var contador = 1; contador <= 9; contador++){
    console.log(numero * contador)
}
// estrutura de repetição com array
var lista = ["ana", "alice", "mario", "claudio"]
for(indice = 0; indice < lista.length; indice++){
    console.log(lista[indice])
}

