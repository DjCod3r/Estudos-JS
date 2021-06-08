const produto = Object.preventExtensions({
    nome: 'GTX 960',
    preco: 850,
    tag: 'placa de video'
})


console.log('Extensivel:',Object.isExtensible(produto))