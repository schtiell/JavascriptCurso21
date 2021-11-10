/*
    Document.cookie

    Manejo de cookies en el navegador web
    chrome://settings/siteData

*/

//Crear 2 cookies una con el nombre y otra con apellido
document.cookie = "nombre = Joaquin";
document.cookie = "apellido = Sayago";

var cookieee = document.cookie;

console.log(cookieee)

//Para ver las cookies en el navegador ir a: chrome://settings/siteData


function makeCookie (nombreCookie, valorCookie) {

    //La función escape permite escapar los caracteres especiales de las cookies
    valorCookie = escape(valorCookie);

    //Se crea una variable de tipo fecha para determinar el tiempo de vida de una cookie
    var vidaCookie =  new Date();

    //.setMonth fija el mes, getMonth obtien el mes actual + 1, si el mes es enero + 1 es febrero
    //console.log(vidaCookie.toDateString(vidaCookie.setMonth(vidaCookie.getMonth() +1)));
    vidaCookie.setMinutes(vidaCookie.getMinutes() +5);

    //Crea la nueva cookie en una varible con los parametros recibidos, toUTCSTring permite cambiar al formato de horario UTC de forma legible
    newCookie = document.cookie = nombreCookie + " = " + valorCookie + "; expires = " + vidaCookie.toUTCString() +";";
    console.log(newCookie)   
}

//Los caracteres especiales crean conflictos en las cookies
makeCookie("nombre","Anton;io");