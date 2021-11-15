console.log('Manejo de eventos del DOM');


let reloj = setInterval(mostrarReloj,1000);

function mostrarReloj(){
    let d = new Date();
    let t =  d.toLocaleTimeString();
    document.getElementById('clock').innerHTML = t;
}

function stopClockNow (){
    clearInterval(reloj);
    console.info('Reloj detenido utilizando el evento ondblclick sobre el boton html');
}

function imprimeAlerta(){
    alert('Diste clic sobre el div');
}

function onFocus(){
    console.log('input con foco');
}

function onBlur(){
    console.log('perdí el foco del input');
}

function onMouseOut(){
    console.log('El mouse entra y sale del textbox');
}

//addEventListener() Registra un evento a un objeto en específico.
var objeto = document.getElementById('objEvento');

function msjEnConsola(){
    console.log('Utilizando eventos con id de html y js!!');
    console.log('Se disparó el evento click');
    console.log(arguments);
}

objeto.addEventListener("click",msjEnConsola);

//addEventListener() Registra un evento a un objeto en específico.
let tecla = document.getElementById('objEventoTeclado');

function msjEnConsolaKeyboard() {
    console.log('Se disparó un evento de tecaldo');
    console.log(arguments); //Muestra los argumentos del addEventListener
}

tecla.addEventListener("keypress",msjEnConsolaKeyboard);