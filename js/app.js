/*Crear una funcion que genere codigos aleatorios unicos, estos codigos pueden ser 
numericos o alfanumercios, por ej. probar crear 30 numero y cada vez que crearmos un 
numero este debe ser unico no se puede repetir con uno generado anteriormente.*/

let array = []
let limite = parseInt(prompt('Ingrese un valor entre el 0 y el 100'))

while(array.length < limite){
    let numero = Math.floor(Math.random()*101)
    if(!array.includes(numero)){
        array.push(numero)
    }
}

console.log(`los numeros ingresado son: ${array}`)




