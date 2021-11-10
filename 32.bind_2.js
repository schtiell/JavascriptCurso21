/**
 *  Otro ejemplo de uso del metodo bind()
 */

console.log("========================================");

let usuario = {
    nombre: 'John Doe',
    obtenerNombre: function(){
        console.log(this.nombre);
    }
};

setTimeout(usuario.obtenerNombre,1000) //undefined

let f = usuario.obtenerNombre;
setTimeout(f,1000); //undefined

//Retorna el valor de nombre del objeto ya que se le pasa por funciona anonima el metodo definido en el objeto
setTimeout(function () {
    usuario.obtenerNombre();
}, 1000)

let fn = f.bind(usuario)
setTimeout(fn,1000) 

/**
 *  Otro ejemplo de uso del metodo bind()
 */

console.log("========================================");

let correr = {
    nombre: "Corredor",
    correr: function (velocidad) {
        console.log(`${this.nombre} corre a una velocidad de ${velocidad} km/h`); 
    }
}

let volar = {
    nombre: "Volador",
    volar: function (velocidad) {
        console.log(`${this.nombre} vuela a una velocidad de ${velocidad} km/h`); 
    }
}

/*
 * 
 *  Usar bind()para tomar prestados métodos de un objeto diferente
 *  https://www.javascripttutorial.net/javascript-bind/
 * 
 * El bind()método crea una nueva función, cuando se invoca, tiene los thisconjuntos en un valor proporcionado.
 * El bind()método permite que un objeto tome prestado un método de otro objeto sin hacer una copia de ese método
 * Esto se conoce como préstamo de funciones en JavaScript.
 * 
 * 
 */

let maratonista = volar.volar.bind(correr,20);
maratonista();

let piloto = correr.correr.bind(volar,25);
piloto();