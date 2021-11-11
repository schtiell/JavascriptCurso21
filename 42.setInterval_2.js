let reloj = setInterval(timer,1000);

function timer(){
    let d = new Date();
    let t =  d.toLocaleTimeString();
    document.getElementById('clock').innerHTML = t;
    
}

function stopClockNow (){
    clearInterval(reloj);
    console.info('Reloj detenido');
}
