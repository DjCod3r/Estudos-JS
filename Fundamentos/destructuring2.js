const [a] = [10]
console.log(a)

const [n1, , n3, n4 = 10] = [2, 3, 4]
console.log (n1, n3, n4)

const [b, , c, , d] = [1,2,3]  // lado direitos = informações do array / lado esquerdo = informações que quero desestruturar do array
console.log(b, c, d)