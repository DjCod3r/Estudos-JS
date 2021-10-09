let a = 1

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(["Ana", "Alex" , "Djonatan"])
})

p.then(valor => valor[0])
.then(primeiraLetra => primeiraLetra[0])
.then(primeiro => primeiro)
.then(lower => lower.toLowerCase())
.then(lower => console.log(lower))





