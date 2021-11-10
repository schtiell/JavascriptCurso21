/*
    document.cookie
*/

//Crear cookie
function makeCookie(clave, valor){

    var valor = escape(valor);

    var fecha = new Date();

    fecha.setDate(fecha.getDate() + 1 );

    var cokie;

    cokie = document.cookie = clave +"="+ valor +";expires=" + fecha.toUTCString()+";";

    return cokie;
}

//Eliminar cookie
function deleteCookie(clave){

    var fecha = new Date();

    fecha.setDate(fecha.getDate() - 1 );

    var cokie;

    cokie = document.cookie = clave + "=x;expires=" + fecha.toUTCString()+";";

    return cokie;
}


//Obtener cookies
function getCookies(nombreCookie){

    var cookies = document.cookie;

    var arregloCookies = cookies.split("; ");

    console.log(arregloCookies);

    for (let i = 0; i < arregloCookies.length; i++) {
        
        var cook = arregloCookies[i].split("=");

        arregloCookies[i] = cook;

        if (cook[0] == nombreCookie){
            
            return unescape(cook[1]);
        }
    }

    //console.log(arregloCookies)


    //Si la cookie no existe retorna undefine
    return undefined;

}

//Instancias para crear cookies
console.log(makeCookie("usuario","jsayagot"));
console.log(makeCookie("password","123456"));
console.log(makeCookie("email","jsayagot@veracruz.gob.mx"));
console.log(makeCookie("direccion","Xalapa Veracruz México"));

//Instancias para eliminar cookies
//console.log(deleteCookie("apellido"))

//Instancias para obtener cookies
console.log(getCookies("password"));