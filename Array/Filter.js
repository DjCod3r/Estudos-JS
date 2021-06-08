const produtos = [
    {nome: 'Notebook', preco: 2300, fragil: true},
    {nome: 'Barra de ferro', preco: 60, fragil: false},
    {nome: 'copo de plastico', preco: 2, fragil: false},
    {nome: 'lampada', preco: 9 , fragil: true}
]


console.log(produtos.filter(function(p){
    if ( p.fragil == true && p.preco > 2 ){
        return true
    }
}))


const caro = produto => produto.preco >= 50
const frageis = produto => produto.fragil == true
const nome = produto => produto.nome === 'lampada'

console.log(produtos.filter(caro,frageis))

console.log(produtos.filter(nome))
