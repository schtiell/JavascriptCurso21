/**
 * 
 * function.prototype.call()
 * 
 * El metodo call es un metodo predefinido de javascript (prototype)
 * Puede usarse para invocar o llamar un metodo de un objeto propietario como argumento (parametro)
 * Con call() un objeto puede utilizar un metodo que pertenece a otro objeto.
 * 
 * """"""" FUNCIONES PRESTADAS"""""""
 * 
 **/


//Cuando invoca una función, el motor de JavaScript invoca el metodo call() de ese objeto de función, supongamos que tenemos la siguiente funcion
function mostrar() {
    console.log("Funcion mostrar utilizando function.prototype.call()");
}

//Se invoca la funcion mostrar()
mostrar();

//La instancia anterior es equivalente a invovar el metodo all en el objeto mostrar de la función
mostrar.call();


console.log("====================================================");


//En este ejemplo en lugar de llamar a la funcion sumar() directamente, se usa el metodo call(), para invocara la función a la función sumar(). El valor "this" se establece en el objeto global
function sumar(a, b) { 
    return a + b; 
}

let resultado = sumar.call(this, 10, 20)
console.log(`El resultado es: ${resultado}`);


console.log("====================================================");


var saludo = "Hola";

var mensaje = {
    saludo : "Hola, ¿Cómo estas?"
}

function saludar(nombre) {
    console.log(this.saludo + ' ' + nombre)
}

saludar.call(this, 'Joaquin');

saludar.call(mensaje,'Antonio')