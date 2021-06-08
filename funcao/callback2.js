const fabricantes = ['Mercedes', 'Audi', 'Chevrolet']

function imprimir(nome, indice){
    console.log(`${indice + 1} ${nome}`)
}

fabricantes.forEach(imprimir)