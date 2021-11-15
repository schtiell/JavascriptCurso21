console.log('Onsubmit parameters');

let validarDatos = function () {
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;

    return true;
}

//Obtener un valor enviado por URL de un formulario mediante una expresion regular
function getParamURL(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

//El objeto window contine el objeto location
console.log(window.location.search);
console.log(getParamURL("Nombre"));
console.log(getParamURL("Apellido"));