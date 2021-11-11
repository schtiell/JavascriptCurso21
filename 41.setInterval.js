//El método serInterval(), llama a una función o evalúa una expresión a intervalos específicos (en milisegundos). El método setInterval() continuará llamando a la función hasta que se llame a clearInterval() o se cierre la ventana.

/*
    Sintaxis:

let timerId = setInterval(func|código, [retraso], [arg1], [arg2], ...)

Todos los argumentos tienen el mismo significado. Pero a diferencia de setTimeout, ejecuta la función no solo una vez, sino regularmente después del intervalo de tiempo dado.

Para detener las llamadas, debemos llamar a ‘clearInterval (timerId)’.

El siguiente ejemplo mostrará el mensaje cada 2 segundos. Después de 5 segundos, la salida se detiene:
*/


let timerId = setInterval( () => console.log('tick'), 2000);

setTimeout( () => {
    clearInterval(timerId); 
    console.log('stop');
}, 5000);


//Anidando el setTimeout es posible ejecutar algo constantemente, 
let timer_Id = setTimeout( function tik() {
    console.log('tik');

    let timer_Id = setTimeout(tik,3000); //(*)

}, 3000);

/* 
    El setTimeout anterior planifica la siguiente llamada justo al final de la actual (*).

    El setTimeout anidado es un método más flexible que setInterval. De esta manera, la próxima llamada se puede planificar de manera diferente, dependiendo de los resultados de la actual.

*/
