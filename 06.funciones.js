console.log('funciones de js')

//Contexto global de la variable
var a = 30;

//Definiendo una funcion
function primeraFuncion () {
    
    //Ambito de la variable
    var a = 20
    console.log(a)
}

function segundaFuncion () {

    console.log(`El valor de la variable a de la segunda funcion es: ${a},  pues toma el valor de a declarada en el contexto global del script`)
}

console.log(a)

//Instancia de la funcion
primeraFuncion()

//Asignacion de la instancia de una funcion a una variable
var segunda = segundaFuncion()