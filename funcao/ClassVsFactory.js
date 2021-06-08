class pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
        console.log(`Minha Idade é ${this.idade}`)
    }

}

const p1 = new pessoa('Lucas', 25)
p1.falar()

const p2 = new pessoa('Alex', 43)
p2.falar()


var nome = "Djonatan"

function teste() {
    var nome = 'Schvambach';
    return teste1()
}

function teste1() {
    var nome = 'Trocando sobrenome'
    return nome
}
console.log(nome,teste())



