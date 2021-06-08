const aprovados = ['Agatha' , 'Algo' , 'Daniel' , 'Raquel']


aprovados.forEach(function(nome, indice){ //indide sempre é o segundo param
    console.log(`${indice + 1}  ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(`${indice} ${aprovado}`)
aprovados.forEach(exibirAprovados)