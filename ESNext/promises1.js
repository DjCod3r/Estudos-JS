let prom = new Promise(function(cumprirPromesa){
    cumprirPromesa({
        a: 1,
        b: 2,
        c: 3
    })
})

prom.then(function(valor){
    console.log(valor.c)
})

let array = new Promise(function(promesa){
    promesa(['Ana', 'Marcos', 'Leo'])
})

//function padrão
array.then(function(valor){
    console.log(valor)
})
//arrow
array
.then(valor => valor[0])//resultado de um metodo é passado para o proximo
.then(valor => valor[0])
.then(valor => console.log(valor))
