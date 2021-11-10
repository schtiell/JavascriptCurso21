console.log('uso de typeof e instanceof en JS')


function Persona () {
    this.nombre = "joaquin",
    this.apellido = "sayago",
    this.edad = 30
}


var usuario = new Persona()

//Funion anonima
var funcion = param => {
    
    //Operador ternario, atajo para la instrucción if
    param instanceof Persona 
        ? console.log(`El paramaetro recibido es un tipo ${typeof param}`,
        `Los datos del usuario son ${param.nombre} ${param.apellido} y tiene ${param.edad} años`)
        : console.log (`${param} es un tipo ${typeof param}`)

}



funcion(1)
funcion("joaquin")
funcion (true)
funcion ({})
funcion (function (){})
funcion (usuario)
