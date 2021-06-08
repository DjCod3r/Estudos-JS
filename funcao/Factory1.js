function criarobj(Nome,Preco,ComDesconto) {
    ComDesconto = Preco * 0.9
    
    return{
        Nome,
        Preco,
        ComDesconto
}

}

console.log(criarobj('notebook',2500,))
