console.log('Manejo de eventos del DOM');


let reloj = setInterval(mostrarReloj,1000);

function mostrarReloj(){
    let d = new Date();
    let t =  d.toLocaleTimeString();
    document.getElementById('clock').innerHTML = t;
}

function stopClockNow (){
    clearInterval(reloj);
    console.info('Reloj detenido');
}