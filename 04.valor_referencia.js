//Paso por valor

//Los tipos primitivos de datos siempre van a pasar por valor
var a = 10
var b = a

console.log(`El valor de a es: ${a}`)
console.log(`El valor de a es: ${b}`)

a = 20

console.log(`El valor de a es: ${a}`)
console.log(`El valor de a es: ${b}`)

var texto = 'Este es un texto de ejemplo'
var texto2 = texto

console.log(`El valor de texto es: ${texto}`)
console.log(`El valor de texto2 es: ${texto2}`)

texto = 'El texto ha cambiado'

console.log(`El valor de texto es: ${texto}`)
console.log(`El valor de texto2 es: ${texto2}`)

//Paso por referencia. Los objetos siempre hace el paso de parametros por referencia ya que se accede al mismo espacio de memoria solo que llamado de manera diferente
var obj = {
    nombre : 'joaquin'
}

var obj2 = obj

console.log(obj)
console.log(obj2)

obj.nombre = 'joaquin antonio'

console.log(obj)
console.log(obj2)
