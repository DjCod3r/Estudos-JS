const valores = [7.2, 6.3, 5.5, 6.6]
console.log(valores[1], valores[2])
console.log(valores[4])
valores [4] = 10
console.log(valores[4])
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, null , 'A')
console.log(valores)
console.log(valores.pop())
delete valores[1]
console.log(valores)
console.log(typeof valores)