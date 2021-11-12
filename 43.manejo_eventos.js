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