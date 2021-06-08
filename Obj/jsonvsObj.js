const obj = {a: 1 , b: 2 , c: 3 , soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //obj para json

//console.log(JSON.parse("{a: 1, b: 2 , c: 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //JSON para obj
console.log(JSON.parse('{"a": 1, "b": "string", "c": true}'))