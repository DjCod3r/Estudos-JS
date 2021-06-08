function Aula(nome , videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula ('Welcome', 12)
const aula2 = new Aula ('Cap2' , 14)

console.log(aula1, aula2)


//simulando new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}


const aula3 = novo(Aula, 'Bem vindo', 124)
console.log(aula3)