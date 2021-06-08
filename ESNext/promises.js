function falarDepoisDe (segundos, frase ) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Legal')
    .then(frase => frase.concat('kkk'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))