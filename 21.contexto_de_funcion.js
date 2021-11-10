/* 
    CONTEXTO DE LAS FUNCIONES

    El contexto de la función se refiere a todo el código que se encuentra declarado dentro de una función, es decir, todo el codigo que se encuentra declarado entre la llave de apertura y la llave de cerrado de la declaracion de la función.

    El contexto global, se refiere a todo el codigo declarado en todo el script js y que puede ser accedido tanto desde funciones como desde cualquier parte del codigo
*/


function crearFunciones(){
    //Contexto de la función

    var array = []
    var numero = 1

    array.push(
        function(){
            console.log(numero)
        }
    )

    numero = 2

    array.push(
        function(){
            console.log(numero)
        }
    )

    numero = 3

    array.push(
        function(){
            console.log(numero)
        }
    )

    return array //Todos los valores retornados son 3 ya que el ultimo valor asignado a la variable numero es 3

}

var fn = crearFunciones()
fn[0]()
fn[1]()
fn[2]()


function crearFns(){
    var array = []
    var numero = 1

    array.push(
        //Nuevo contexto de función
        (function(numero){
            return function (){
                console.log(numero)
            }
        })(numero)
    )

    numero = 2

    array.push(
        //Nuevo contexto de función
        (function(numero){

            //Retorna la función completa  al array.push
            return function (){ 
                console.log(numero)
            }
        })(numero)
    )

    numero = 3 

    array.push(
        //Nuevo contexto de función
        (function(numero){

            //Retorna la función completa  al array.push
            return function (){ 
                console.log(numero)
            }
        })(numero)
    )
    
    //Retorna el arreglo como un objeto para que pueda ser alcanzado por la instancia fn de la función 
    return array
}

var fn= crearFns()
console.log(typeof fn)
fn[0]()
fn[1]()
fn[2]()


function crearFuncionesFinal () {

    var array = []
    var numero = 1

    for (numero = 1; numero<=3; numero++) {

        //El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
        array.push(
            (function (n) {
                return function(){
                    console.log(n)
                }
            })(numero)
        )
    }

    return array

}

var cff = crearFuncionesFinal()
console.log(`La longitud del arreglo devuelto es ${cff.length}`)
cff[0]()
cff[1]()
cff[2]()