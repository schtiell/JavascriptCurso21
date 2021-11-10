console.log('Uso de prototipos de js')


function Persona(){
    this.nombre = "Joaquin",
    this.apellido = "Sayago",
    this.edad = 30,
    this.pais = "México"

    /* this.imprimirInfo = function () {
        console.log(`El nombre completo es ${this.nombre} ${this.apellido}`)
    }*/
}

// Agregar una propiedad a la clase utilizando prototipos. La propiedad debe aparecer en la seccion de prototipos de la instancia de de la clase.

//Aunque este no es el verdadero uso de los prototipos ya que la propiedad pais puede definirse dentro de la clase
// Persona.prototype.pais = "México"


Persona.prototype.imprimirInfo = function () {
    console.log(`El nombre de la persona es ${this.nombre} ${this.apellido}...Msj utilizadondo una metodo prototype`)
}

var persona1 = new Persona();
persona1.imprimirInfo()