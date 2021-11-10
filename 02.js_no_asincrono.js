console.log("Js no es asincrono")

function impresion() {
    for(var i = 0; i<10; i++){
        console.log(`Impresion no ${i+1}`)
    }
}   

function clicme(){
    console.log('boton presionado. Js no es asincrono ya que no ejecuta el codigo de una funcion hasta que termina el ciclo o bloque de codigo actual.')
}

impresion()

