/* 
V e V = V
V e F = F
F e ? = F

V ou V = V
F ou V = V
F ou F = F

V xor V = F
V xor F = V
F xor F = F

!v = f 
!f = v

*/

function compras(trabalho1, trabalho2){
const comprarsorvete = trabalho1 || trabalho2
const comprartv50 = trabalho1 && trabalho2
const comprartv32 = trabalho1 != trabalho2
const mantersaudavel = !comprarsorvete
return{comprarsorvete, comprartv50, comprartv32, mantersaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,false))
