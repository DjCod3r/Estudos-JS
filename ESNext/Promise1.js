function randomTime(min,max){
return Math.random(Math.floor * (max - min) + min)
}


function conectarDb(msg , tempo){
 setTimeout(()=> {
     console.log(msg)
 }, tempo * 1000)
}


conectarDb('conectou', randomTime(3, 3))
conectarDb('conectou1', randomTime(1,5))
conectarDb('conectou2', randomTime(1,5))