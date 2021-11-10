/*  
    Metodo bind()
    function.prototype.bind()

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

    El metodo bind() crea una nueva funcion que cuando se manda a llamar tiene un contexto "this" asignado por nosotros 

    this: se refiere a propiedades o metodos dependiendo del contexto donde es llamado ya sea en el contexto global (todo el script) o dentro del contexto de una función

*/

//Creación de un objeto
var carro = {
    marca : "Mazda",
    color : "Rojo",

    imprimir: function(){
        var impresion = `El auto es marca: ${this.marca}, color: ${this.color}`;
        return impresion;
    }
};

console.log(carro.imprimir());


var logCarro = function (arg1, arg2) {
    console.log(`Carro: ${this.imprimir('ford','verde')}`);
    console.log(`Los argumentos de la funcion son: ${arg1}, ${arg2}`);
}

//Ya que busca la funcion this en el contexto de la función no la encunetra marca undefined en el console.log de la primera impresion. En la segunda imprime sin problemas sus propios argumentos recibidos
//logCarro();


//uso de bind()
var logModeloCarro = logCarro.bind(carro);
logModeloCarro('4 puertas','Diesel');
logModeloCarro('2 puertas', 'quemacocos');


/**
 *  Otro ejemplo de uso del metodo bind()
 */

 console.log("========================================");

x = 9;

var modulo = {
    x: 81,

    imprimirX: function () { 
        return console.log (`El valor del numero es: ${this.x}`); 
    }
};   

//Retorna 81 ya que se llama a la funcion obtenerNumero que retorna el numero definido en el objeto haciendo referencia a este numero con el uso de la palabra reservada this.
modulo.imprimirX();

//Imprime 9 porque en este caso "this" apunta al objeto global
var obtenerX = modulo.imprimirX;
obtenerX();

//Uso de metodo bind()
var dameX = obtenerX.bind(modulo);
dameX();


/**
 *  Otro ejemplo de uso del metodo bind()
 */

console.log("========================================");

var nombreCompleto = 'joaquin antonio sayago trujillo'

var persona = {

    otra : {
        nombreCompleto : 'yamilet castelan'
    },

    nombreCompleto: 'valeria sayago',
    
    imprimirNombre: function () {
        return this.nombreCompleto;
    }
};

//Referencia al this en el contexto de la función del objeto persona
console.log(`El nombre completo en el contexto global: ${persona.imprimirNombre()}`);

//Referencia al this en el objeto global (ven en el navegador ya que consola imprime undefined)
var persona1 = persona.imprimirNombre;
console.log(`El nombre completo en el contexto global: ${persona1()}`);

//Usando metodo bind()
var person1 = persona1.bind(persona);
console.log(`El nombre completo en el contexto de la funcion del objeto usando el metodo bind: ${persona1()}`);

var otherPersona = persona1.bind(persona.otra);
console.log(`El nombre completo en el contexto de la funcion del objeto usando el metodo bind: ${otherPersona()}`);