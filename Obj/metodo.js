//metodo literal
const obj1 = {}
console.log(obj1)


// object em JS
console.log(typeof Object , typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcões contrutoras 

function Produto(nome, preco , desc){ //Criação do Object e seus parametros
    this.nome = nome 
    this.getPrecoComDesconto = () => { //metodo de desconto
        return preco * (1- desc)
    }
}


const p1 = new Produto('Caneta', 7.99 , 0.15)
const p2 = new Produto('Notebook', 2500, 0.10)

console.log(p1.nome, p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Factory Function

function criarFuncionario(nome,salarioBase, faltas){
    return{ 
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 26 ) * (26 - faltas) 
            
        },
        gethoras(){
            return(salarioBase / 176)
        }
        
    }
    
}

const f1 = criarFuncionario('Joao ' , 4300 , 2)
const f2 = criarFuncionario('maria', 18000, 0)
const Djotinha = criarFuncionario('Djtinha' , 1358 ,-1)


console.log(f1.nome,f1.salarioBase,f1.getSalario())
console.log(f2.nome,f2.salarioBase,f2.getSalario(),f2.gethoras())
console.log(Djotinha.salarioBase,Djotinha.getSalario(),Djotinha.gethoras())

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//transformar JSON em Object

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

a = f2.salarioBase
b = 22
c = a / b
d = f2.gethoras()
e = f2.getSalario()
console.log(c)
console.log(d, e)
f = f2.getSalario() * 0.76
console.log(f)


