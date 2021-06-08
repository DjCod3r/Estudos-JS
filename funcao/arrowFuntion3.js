let comparaComThis = function (param){
console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(this)


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(this)
