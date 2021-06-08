
// criando valores randomicos
function rand({min = 0, max = 1000}){   // a função criada (rand) setada com valores entre 0-1000
    const valor = Math.random() * (max - min) + min  // constante criada (valor) para criar numeros randomicos
    return Math.floor(valor)  // retornando o (valor)
}
console.log(rand({max:100, min:0}))  //chamando numero aleatorio direto pela função

const aleatoria = {max:100, min:50}  // criando objeto que com sua propria capacidade de numerica
console.log(rand(aleatoria)) 
console.log(rand({}))




