/*
    Sobre carga de operadores

    Js no permite la sobrecarga de operadores, ejemplo:
        function crearProducto(){
        }

        function crearProducto(argumento){
        }

        function crearProducto(argumento1,argumento2){
        }

    Js no permite realizar lo anterior ya que js sobreescribe las funciones y solo funcionaría la ultima funcion
*/

/*Ejmplo de como trabajar la sobrecarga de operadores con js*/

function crearProducto(nombre,precio){
    
        nombre = nombre || "sin nombre"
        precio = precio || 0

        console.log(`El producto es: ${nombre} y su precio es: ${precio}`)
}

function crearProducto100(nombre){
    crearProducto(nombre,100)
}

function crearProductoCamisa(precio){
    crearProducto("camisa",precio)
}

crearProducto("Lapiz")
crearProducto100("corrector")
crearProductoCamisa(75)