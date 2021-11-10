/*
    Manejo de erroes Js
    Try, catch & finally
*/


try {
    
    //throw permite lanzar un error para que entre en acción el codigo del bloque catch
    //throw funciona como una instancia de la función catch y envía el mensaje, como parametro.
    throw new Error("Error en tiempo de ejecución");

    console.log("Este mensaje no se imprime ya que el bloque try es interrumpido por un error con throw")


//Bloque catch recibe un parametro     
} catch (error) {
    console.log(error.message);

//El bloque finally se ejecuta siempre, no importa si se ejecuta el try o el catch
}finally{
    console.log("Mensaje del bloque finally que se ejecuta siempre");
}


try {
    
    //Manda un objeto anonimo como parametro al bloque catch
    throw {
            idError:"1x05g5",
            nombreError: "Error de conexión a la bd",
            descripcionError: "El error se presenta en el odbc de la base de datos mysql"
    }

} catch (error) {

    //Imprime una propiedad del código
    console.error(`El código de la excepción es: ${error.idError}`)

    //Imprime todo el objeto enviado por el trow del bloque try
    console.error(error)
    
}finally{

    console.log('Este codigo del finally si se ejecuta')
}


try {
    
    let miError = new Error("1x0d43wx")
    throw miError

} catch (e) {

    registroError(e)

}finally{

}

function registroError(error){
    let fecha = new Date()
    console.error(`Se registro un error ${error} con fecha: ${fecha}`) 
}