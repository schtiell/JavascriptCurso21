//Planificación: setTimeout() y setInterval().
//https://es.javascript.info/settimeout-setinterval

// Podemos decidir ejecutar una función no ahora, sino en un momento posterior. Eso se llama:

// “planificar una llamada”.

//Hay 2 métodos para ello: 

//  - setTimeout()
//  - setInterval()

// Estos métodos no son parte de la especificación de JavaScript. Pero la mayoría de los entornos tienen el planificador interno y proporcionan estos métodos. En particular, son compatibles con todos los navegadores y Node.js.

//setTimeout(): Permite ejecutar una función una vez despues del intervalo de tiempo.

//Su sintaxis:

// let timerId = setTimeout(func|código, [retraso], [arg1], [arg2], ...)


//Ejemplo 1: mensaje en consola, pasados 2 segundos despues de cargar el sitio
setTimeout(function(){
        console.log('pasarón 2 segundos')
},2000);

//Ejemplo 2: mensaje utilizando la funcion alert del DOM para enviar un mensaje pasados 3 segundos.
// setTimeout(function(){
//     alert('Uso de la funcion setTimeout, pasaron 3 segundos');
// },3000)


//Ejemplo 3: con argumentos
function sayHello(msj, para){
    console.log(`${msj}, ${para}`);
}

setTimeout(sayHello,3000,'Hola, este es mi msj para ti', 'jsayagot');

//Esto tambien funcionará, pero no se recomienda utilizar strings, deben utilizarse funciones flecha o funciones anonimas

//setTimeout(console.log('hola', 4000));

//De está manera:
setTimeout(() => {
    console.log('hi');
},5000);


/*Aunque setTimeout necesita una función como parametro, esta solo necesita la referencia

setTimeout(sayHello,1000); 
Manera correcta, sin los parentesis

setTimeout(sayHello (),1000); 
Esto es incorrecto ya que aqui se ejecuta la función al incluir los parentesis, el resultado de esa función es retornado a la funcion setTimeout.

*/






