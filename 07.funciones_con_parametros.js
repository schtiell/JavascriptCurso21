console.log('funciones con parametros')

//Buena practica poner todas las funciones al inicio del programa
function imprimirNombre (nombre) {
    console.log(nombre)
}

function imprimirEdad (edad) {
    console.log(edad)
} 

//Funcion con 2 parametros
function imprimirTodo (nombre,edad) {

    //Si el parametro no se indica, se imprime en consola el resultado undefined
    imprimirNombre()
    
    //Instancias de las funciones y les envia a cada una su parametro necesario
    imprimirNombre(nombre)
    imprimirEdad(edad)
}

//Funcion que recibe un objeto
function imprimirPersona (persona) {
    console.log(`El nombre de la persona es: ${persona.nombre} y tiene ${persona.edad} años`)
}

// 
function imprimirFuncion (fn) {
    fn()
}


//Instancias de las funciones
imprimirNombre ('Joaquin Sayago')
imprimirEdad(35)
imprimirTodo('joaquin',35)

//Instancia de la funcion que envía un objeto anónimo {} es decir sin nombre del objeto solo utilizando las llaves
imprimirPersona({
    nombre : 'joaquin',
    edad : 35
})

//Objeto declarado
var objeto = {
    nombre : 'Maria',
    edad : 30
}

imprimirPersona(objeto)

//Instancia de una funcion tenviando una funcion tradicional anónima ()
imprimirFuncion( function () {
    console.log('Funcion tradicional anonima como parametro') 
})

//Instancia de una funcion tenviando una funcion flecha anónima ()
imprimirFuncion( () => console.log('Funcion flecha anonima como parametro') )

//Declaracion de una funcion en una variable
var funcion = function () {
    console.log('Enviando una funcion tradicional declarada en una variable')
}

imprimirFuncion(funcion)