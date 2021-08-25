function falarDepoisDe(segundos , frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000 ) 
    })
}

let conversa = 'falar'

falarDepoisDe(3 , conversa )
.then(falar => falar.concat(' Oi'))
.then( dnv => console.log(dnv))