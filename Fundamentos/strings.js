const rpgmaker = "dificil9"   //<<<<< Isso é a String , cada letra é um Indice
console.log(rpgmaker.charAt(1)) //mostra o Indice , baseada na sequencia numérica
console.log(rpgmaker.charCodeAt(1))  //mostra o numero baseado no code
console.log(rpgmaker.indexOf(9))  //mostra a posição deste Numero dentro da minha String
console.log(rpgmaker.substring(1))   //vai aparecer o minha string a partir do indice 1
console.log(rpgmaker.substring(0, 3)) //assim ele vai aparecer do Indice 0 ao 2
console.log('rpgmaker'.concat(rpgmaker).concat ('!!!')) //vai ligar minha string e var
console.log(rpgmaker.replace(9, 'l')) //troca valores das indices
console.log('força, inteligencia, defesa'.split(',')) //criação de Array com elementos separados
