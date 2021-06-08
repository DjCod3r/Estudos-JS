const pessoa = {
    nome: 'ana',
    idade: 25,
    peso: 45,
    logradouro: {
        rua: 'carlos bier',
        numero: 1000
    }
}
console.log(pessoa)

const {nome, idade } = pessoa // pegando as propriedades nome e idade , do objeto pessoa.
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // alterando nome das variaveis nome e idade
console.log(n, i)

const {logradouro: {rua, numero}} = pessoa
console.log(rua)

