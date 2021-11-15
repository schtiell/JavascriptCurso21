console.log('Bloquando el clic derecho');

document.onmousedown = function (arguments) {

    // Arguments contiene todos los metodos y propiedades del evento onmousedown. button === 2 es el clic derecho
    if (arguments.button === 2){
        alert('Click derecho bloqueado!!');
    }

    // Cuando el clic izquierdo es usado
    console.log('clic permitido');
}

document.onmouseup = function () {
    let selected = window.getSelection().toString();
    console.log(selected);
}
