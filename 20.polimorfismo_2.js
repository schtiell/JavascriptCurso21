/*

    Polimorfismo

*/


function fruta(ancho, alto) {
    return { 
        descripcion (){
        console.log(`A. Dimensión de la fruta: ${ancho} de ancho y ${alto} de alto`)
        }
    }
}

function mercado(ancho,alto,precio){
    return{
        descripcion (){
            console.log(`B. Dimensión de la fruta ${ancho} de ancho, ${alto} de alto y con un valor de \$${precio}`)
        }
    }
}

function mostrarDescripcion(obj){
    
    //Validación de que descripcion en el objeto sea una 
    if (typeof obj.descripcion === 'function'){
        obj.descripcion() /*Uso del polimorfismo*/
    }

}

//Variable que almacena el objeto retornado por la función fruta
var miFruta = fruta(20,30)
// miFruta.descripcion()


//Variable que almacena el objeto retornado por la función mercado
var miMercado = mercado(30,40,150)
// miMercado.descripcion()


//Instancias de la funcion mostrarDescripción y se envia la variable que contiene el objeto retornado
mostrarDescripcion(miFruta)
mostrarDescripcion(miMercado)

