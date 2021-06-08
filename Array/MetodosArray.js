const pilotos = ['Vettel', 'Alonso' , 'Raikkonen' , 'Massa']
pilotos.pop() //remove last element
console.log(pilotos)

pilotos.push('Vestappen') //increase one element in last position
console.log(pilotos)

pilotos.shift() //remove first element
console.log(pilotos)

pilotos.unshift('Hamilton') //increase first element
console.log(pilotos)



//adicionar
pilotos.splice(2, 0,'botas' , 'Massa')

console.log(pilotos)

//remover a partir do indice 3

pilotos.splice(3, 1)
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice [2]


console.log(algunsPilotos1)


const algunsPiotos2 = pilotos.slice(1 , 4) // novo array Indice 1 , 2 ,3 

console.log(algunsPiotos2)