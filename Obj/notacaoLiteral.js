const a = 1 
const b = 2 
const c = 3

const obj2 = {a, b, c}


const nomeAttr = 'nota'
const valorAttr = 8.24

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2() {}
}

console.log(obj5)