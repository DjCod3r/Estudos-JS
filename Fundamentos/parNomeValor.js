// par nome / valor
const energia = 'opa' // contexto léxico 1

function ex(){
    const energia = 'eae' //contexto léxico 2
    return energia
}


const cliente = { 
    nome: 'Dj',
    peso: 90,
    idade: 32,
    endereço: {
        rua: 'carlos bier',
        numero: 2018,

    }
}
console.log(ex())
console.log(energia)
console.log(cliente)
console.log(typeof cliente)