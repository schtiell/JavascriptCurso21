/*
    Objeto Date()
*/

//Deifinición de un objeto tipo fecha
let hora = new Date()
console.log(hora)

//Otras formas de iniciarlizar el ojeto date
let fechaMilisegundos = new Date(1)
console.log(`La fecha en milisegundos: ${fechaMilisegundos}`)

let year = 2021
let month = 9 // En base 0 lo que quiere decir que los meses son de 0 a 11, por lo tanto 9 es Octubre
let day = 13
let hour = 1
let minute = 22
let second = 34
let milisecond = 1

let fechaFija = new Date(year, month, day, hour, minute, second, milisecond)
console.log(fechaFija)

//obtener año
console.log(`El año actual es: ${hora.getFullYear()}`)

//Obtener la dia del mes
console.log(hora.getHours())

//Obtener los milisegundos
console.log(hora.getMilliseconds())

//Obtener el mes retorna valor de de 0 a 11
console.log(hora.getMonth())

//Obtener los segundos
console.log(hora.getSeconds())

//Obtener el tiempo de una operacion
var inicio = new Date()

for (let index = 0; index < 15000; index++) {
    console.log(index)
}

var fin = new Date()

var tiempo = inicio.getTime() - fin.getTime() / 1000000

console.log(tiempo)

