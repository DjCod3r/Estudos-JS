function Carro(velocidadeMax = 200 , delta = 5){
    
    
    let velAtual = 0;
    
    
    //metodo publico
    this.acelerar = function() {
        if(velAtual <= velocidadeMax){
            velAtual += delta;
        }else {
            velAtual = velocidadeMax;
        }
    }

    //metodo publico
    this.freiar = function(){
        if(velAtual > 0){
            velAtual -= delta;
        }else{velAtual = 0}
    }

    //metodo publico 
    this.getVelocidadeAtual = function (){
        return velAtual
    }

}


const uno = new Carro


uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(300, 20)


ferrari.acelerar()


console.log(ferrari.getVelocidadeAtual())

for(i = 0; i < 5 ; i++){
    
    ferrari.acelerar()
    
        console.log('Velocidade da Ferrari km/h ' + ferrari.getVelocidadeAtual())
        
            if(ferrari.getVelocidadeAtual() > 100){
        
                for(i = 0; i < 4; i ++){
                   
                    ferrari.freiar()
                   
                         console.log('Velocidade da Ferrari km/h ' + ferrari.getVelocidadeAtual())
        }
    }
}