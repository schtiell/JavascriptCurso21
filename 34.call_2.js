/**
 *  Otro ejemplo de uso del metodo call() con argumentos
**/
console.log("===================================")

let persona = {
    nombreCompleto : function () {
        return this.nombre + " " + this.apellido;
    }
}

let persona1 = {
    nombre: 'joaquin',
    apellido: 'sayago'
}

let  persona2 = {
    nombre: 'maria',
    apellido: 'silva'
}

console.log(persona.nombreCompleto.call(persona1));
console.log(persona.nombreCompleto.call(persona2));

/**
 *  Otro ejemplo de uso del metodo call() con argumentos
**/
console.log("===================================")

const user = {
    imprimirNombre : function (ciudad, estado, pais) {
        return this.nombre + " " + this.apellido + " " + ciudad + " " + estado + " " + pais; 
    }
}

const user1 = {
    nombre : 'joaquin',
    apellido : 'sayago'
}

//Metodo call() solicita el metodo imprimirNombre del objeto user, ademas envía 3 parametros.
console.log(user.imprimirNombre.call(user1, "Xalapa", "Veracruz", "México"))


/**
 *  Otro ejemplo de uso del metodo call() para encadenar constructores para un objeto
 *  El metodo call(), se puede utilizar para encader constructores para un objeto. 
 *  Veamos el siguiente ejemplo:
 *  Primero se inicializa el objeto Caja con 2 propiedad alto y ancho
 *  En segundo lugar se invoca el metodo call() del objeto Caja dentro del objeto Widget, se establece el valor   this del objeto Widget
**/
console.log("===================================")


function Caja (alto,ancho) {
    this.alto = alto;
    this.ancho = ancho;
}

function Widget (alto, ancho, color) { 
    Caja.call(this,alto,ancho);
    this.color = color;
    return this.alto + " " + this.ancho + " " + this.color
}

let widget = new Widget(100, 200, 'rojo')
console.log(widget)


/**
 *  FUNCIONES DE PRESTAMO
 *  Usnado el metodo call() para el prestamo de funciones js
 *  Técnicamente el objeto aeroplano ha tomado prestado el metodo arrancar() del objeto auto.
 *  Cuando un objeto utiliza un metodo de otro objeto se denomina función de prestamo.
 *  Posteriormente tambien el objeto auto utilizar el metodo volar() del objeto aeroplano.
 *  
**/

console.log("===================================")

const auto = {
    nombre : 'Ferrari',
    arrancar : function () {
        console.log(`Es hora de arrancar el ${this.nombre}`);
    },

    acelerar : function () {
        console.log(`Aumentar velocidad del ${this.nombre}`)
    },

    detener: function () {
        console.log(`Detener el ${this.nombre}`)
    }
};


const aeroplano = {
    nombre : 'Avión',
    volar : function () {
        console.log(`Es hora de pilotear o acelerar hasta hacer volar el ${this.nombre}`)
    }
}

auto.arrancar.call(aeroplano);
aeroplano.volar.call(auto);


/**
 *  FUNCIONES DE PRESTAMO
 *  Las aplicaciones tipicas del prestamo de funciones son utilizar los metodos integrados del tipo Array.
 *  Por ejemplo el objeto arguments dentro de una funcion es un objeto similar a una matriz, no un objeto de la matriz. Para utilizar el metodo slice()  del objeto Array debe utilizar el metodo call() 
 *  
**/

console.log("===================================")

function getOddNumbers() {
    const args = Array.prototype.slice.call(arguments);
    return args.filter(num => num % 2);
}

let oddNumbers = getOddNumbers (10,1,3,4,8,9);
console.log(oddNumbers);

