/*
    Objeto Arguments js
*/

//EL objeto arguments recibe un tratamiento tipo array por lo cual se pueden acceder a los parametros de una funcion tradicional utilizando la nomenclatura de un arreglo
function funcion (a,b,c) {
    
    //Propiedad length del objeto arguments para controlar la cantidad parametros de la función
    if (arguments.length != 3) {
        console.log('Necesito 3 parametros o argumentos para ejecutar la función')
        return 0
    }else{
        console.log(arguments [0]),
        console.log(arguments [1]),
        console.log(arguments [2]),
        console.log(arguments)
    }
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function myConcat(separator) {
    let args = Array.prototype.slice.call(arguments, 1)
    return args.join(separator)
}

//
function registro(nombre,apellido,pass) {

    arguments.length != 3
    ? console.log('argumentos incompletos')
    : (
        //El objeto arguments almacena tipo array los argumentos de la función. NO es un array, es un objeto
        console.log(arguments),
        console.log(arguments[1])
    )
}


//Instancias de las funciones
console.log(myConcat('... ', 'red', 'orange', 'blue'))

funcion(10,20)

registro('joaquin','sayago',123456)