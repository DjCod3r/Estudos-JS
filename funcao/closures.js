const x = 'global'

function fora(){
    const x = "local"
    function dentro(){
        return x
    }
    return dentro
}

const minhhaFuncao = fora()
console.log(minhhaFuncao())