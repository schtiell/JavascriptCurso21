console.log('Las funciones pueden retornar, undefined, tipos primitivos, objetos o funciones')

//DEFINICION DE FUNCIONES
function obtenerAleatorio () {
    return Math.random()
}

function obtenerNombre () {
    return "Joaquin"
}

function obtenerNumero () {

    var numero = obtenerAleatorio()
    console.log(numero)

    if (numero > 0.5) {
        return true
    }else{
        return false
    }
}

function crearObjeto(name,lastname){

    //Retorno de una objeto anónimo
    return {
        nombre : name,
        apellido : lastname
    }
}

function crearPrimeraFuncion (nombre) {
    
    return function () {

        console.log(`primera funcion creada por ${nombre}`)

        return function () {
            console.log('segunda funcion creada')

            return () => console.log('tercera y ultima funcion anidada definida como funcion arrow')
        }
    }
}

//SECCION DE INSTANCIAS DE FUNCIONES

var numero = obtenerAleatorio()
console.log(`El numero aleatorio es: ${numero}`)

console.log(`El nombre obtenido es: ${obtenerNombre()}`)

if (obtenerNumero()){
    console.log('Es mayor a 0.5')
}else{
    console.log('Es menor de 0.5')
}

var persona = crearObjeto('joaquin','sayago')
console.log(persona)
console.log(persona.nombre)
console.log(persona.apellido)

var primera = crearPrimeraFuncion(persona.nombre)
var segunda = primera()
var tercera = segunda()
tercera()