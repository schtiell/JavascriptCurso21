/**
 * 
 * function.prototype.apply()
 * 
 * El metodo apply() permite llamar a una funcion con un valor this dado y argumentos proporcionados como un array
 * El metodo apply() acepta dos argumentos:
 * 
 * Sintaxis: fn.apply(thisArg, [args])
 * 
 *  1. El thisArg es el valor de this proporcionado para la llamada a la funcion fn.
 *  2. EL argumento args es una matriz o arreglo que especifica los argumentos de la función fn.
 * 
 * El metodo apply() es similar al metodo call() excepto que toma los argumentos d ela función como un arreglo en lugar de argumentos individualess
*/

/**
 * Ejemplo. La funcion saludar() acepta 2 parametros: "saludo", "mensaje". Dentro de la funcion saludar se hace referencia al objeto que tiene la propiedad nombre.
 * 
*/

//objeto persona
var persona = {
    nombre: 'joaquin',
    apellidos: 'sayago'
};

//funcion saludar usando this para hace referencia a la propiedad nombre del objeto persona
function saludar (saludo, mensaje){
    return `${saludo} ${this.nombre} ${mensaje}`;
}

//Utilizando el metodo apply()
let saludo = saludar.apply(persona, ['hola!!', '¿Cómo estas?']);
console.log(saludo);

//Utilizando el metodo call()
let nuevoSaludo = saludar.call(persona, 'hola!!', '¿Cómo estas?' );
console.log(nuevoSaludo);

/**
 * Prestamo de funciones con el metodo apply()
 * 
*/

//objeto computadora
let computadora = {
    marca : 'Apple',
    modelo: 'Macbook Air',
    encendido : false,

    encenderEquipo : function () {
        this.encendida = true;
        return `El equipo ${this.modelo} ahora está encendido`;
    },

    apagarEquipo : function () {
        this.encender = false;
        return `El equipo ${this.modelo} ahora está apagado`;
    }
};

//Objeto servidor
let servidor = {
    marca : 'Dell',
    modelo : 'Power edge 2900',
    encendido : false
};


let operacion = computadora.encenderEquipo.apply(servidor);
console.log(operacion);

operacion = computadora.apagarEquipo.apply(servidor);
console.log(operacion);


/**
 * 
 * Usando el metodo apply() para agregar un array a otro.
 * 
 * El metodo apply() permite agregar los elementos de una array a otro.
 * El siguiente ejemplo el metodo apply() modifica el array llamado arrelgo.
 * El metodo Array.prototype.concat() tambien proporciona el mismo resultado, excepto que devuelve un nuevo array en lugar de modificar el arreglo original
 * */

//Apply() para concatener 
let arreglo = [1,2,3,4,5];

let numeros = [6,7,8,9,0];

arreglo.push.apply(arreglo, numeros);

console.log(arreglo);

//Mismo resultado con prototype.concat()
arreglo.concat(numeros)

console.log(arreglo);


/**Simular un metodo max() en arreglos
 * 
 * Dado que los arreglos de javascript no tienen un metodo max(), se puede aplicar el metodo Math.max() en su lugar
 * 
 */ 

console.log(Math.max.apply(null, arreglo));
console.log(Math.max.apply(" ", arreglo));
console.log(Math.max.apply(Math, arreglo));
console.log(Math.max.apply(0, arreglo));

//En el modo estricto de Javascript si el primer argumento del metodo apply() no es un objeto, se convierte en el propietario (objeto) de la funcion invocada. En el metodo no estricto se convierte en el objeto global