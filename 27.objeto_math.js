/*
    Objeto Math

    Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.
*/

//Constante de Euler la base de los logaritmos naturales, aproximadamente 2.718.
const E = Math.E
console.log(`La constante de Euler es: ${E}`)

//Constante PI. Radio de la circunferencia de un circulo respecto a su diámetro, aproximadamente 3.14159.
const PI = Math.PI
console.log(`La constante Pi, es: ${PI}`)

//Por convención las constantes se definen en Mayúsculas

var numero = 10.456789
console.log(`El numero es: ${numero}`)

//Math.round(). Devuelve el valor de un número redondeado al número entero más cercano.
console.log(`${Math.round(numero)}`)

//Utiliznado round para obtener el entero y 2 decimales
console.log(`El numero declarado con 2 decimales es: ${Math.round(numero * 100) / 100}`)
console.log(`El numero declarado con 3 decimales es: ${Math.round(numero * 1000) / 1000}`)

//Math.floor(). Devuelve el mayor entero menor que o igual a un número. Devuelve solo el entero
console.log(`${Math.floor(numero)}`)

//Math.pow(x,y). Las devoluciones de base a la potencia de exponente, que es, baseexponent.
console.log(`El cuadrado de 5 es: ${Math.pow(5,2)}`)
console.log(`El cubo de 5 es: ${Math.pow(5,3)}`)
console.log(`5 a la 5ta potencia es: ${Math.pow(5,5)}`)

//Math.random(). Devuelve un número pseudo-aleatorio entre 0 y 1.

function numeroAleatorio (min, max) {
    return Math.floor( Math.random() * (min, max))
}

//Misma funcion anterior
var aleatorio = (inferior,superior) => {
    let numeroPosibilidades = superior - inferior
    console.log (numeroPosibilidades)
    let aleatorio = Math.random() * (numeroPosibilidades + 1)
    console.log(aleatorio)
    aleatorio = Math.floor(aleatorio)
    console.log(aleatorio)
    return inferior + aleatorio
}

console.log(numeroAleatorio(1,5))
console.log(aleatorio(10,15))

//Math.sqrt(). Devuelve la raíz cuadrada positiva de un número.
console.log(`La raiz cuadrada de ${Math.floor(numero)} es: ${Math.sqrt(numero)}`)


//Prototipo para numero aleatorio 
//Ya que Math no es un constructor no tiene la propiedad prototype por lo cual solo se agrega el método directamente al objeto Math
Math.Aleatorio = function (min, max) {
    return Math.floor( Math.random() * (min, max + 1) + min)
}

let nuevoNumero = Math.Aleatorio(10,20)
console.log(`El numero random generado por el prototype es: ${nuevoNumero}`)