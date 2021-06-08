const pessoa = {
    saudação: "bom dia",
    falar(){
        console.log(this.saudação)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()