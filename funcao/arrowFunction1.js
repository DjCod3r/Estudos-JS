let dobro = function (a) {
    return 2 * a
}

dobro(1)
console.log(dobro(1))


dobro = (a) => {
    return 2 * a
}


dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return "Ola"
}

ola = () => "Ola"
console.log(ola())