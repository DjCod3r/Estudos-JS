class Lancamento { //crirar class Lancamento
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes 
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 10000) //inserindo parametros na class lancamento
const contaLuz = new Lancamento('Luz', -250)
const contaagua = new Lancamento('Agua', -94)

const contas = new CicloFinanceiro(6, 2019)
contas.addLancamentos(salario, contaLuz)
contas.addLancamentos(contaagua)
console.log(contas.sumario())

