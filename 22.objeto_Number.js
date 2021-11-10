/*

    Objeto Number

*/

a = 3
b = new Number(3)

a === b
? console.log(true)
: console.log(false)

a == b
? console.log(true)
: console.log(false)

//para indicar el numero de decimales a mostrar
a = 10.46865444
console.log(a.toFixed(2))

//
console.log(a.toPrecision(3))

//Convertir un numero a string
a = a.toString()
console.log(typeof a)

var c = new Number("20e")

console.log(c)
console.log(c.valueOf()) //Produce error NaN Not A Number