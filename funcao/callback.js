const notas = [5.5 , 7.6 , 8.2 , 3.2 , 4.4, 9.2];


let notasBaixas = [];



//
for(var i in notas){ // laço de repetição do i que por padrão é 0 até percorrer todas Notas
    if( notas[i] < 7){ // se o Indice de notas tiver valor menor que 7 executa a linha abaixo
        notasBaixas.push(notas[i]) //notasBaixas recebem os valores de const notas menores que 7.

    }
}


//console.log(notasBaixas)
notasBaixas = notas.filter(function (notas){
    return notas < 7
})


console.log(notasBaixas)


const placasdevideo = [880,550,650,450,800,300,200,250,885,3000,780,666]

let compravel = [];

const dinheiro = 650


compravel = placasdevideo.filter(function(placasdevideo){
    return placasdevideo <= dinheiro
})


console.log(compravel)


