console.log('Operador new para instancias de funciones parecidas a clases de otros lenguajes de programación')


function Persona (name,lastname,age) {

    //console.log(this)
    
    //Atributos de la clase
    this.nombre = name
    this.apellido = lastname
    this.edad = age

    //Metódos de la clase
    this.imprimirDatos = function (){
        console.log(`Los datos de la persona son: ${this.nombre} ${this.apellido} y tiene ${this.edad} años`)
    }


}

//Objeto de la clase o instancias de la clase
var persona1 = new Persona('Joaquin','Sayago',35)
persona1.imprimirDatos()

var persona2 = new Persona('Lulu','Castelan',12)
persona2.imprimirDatos()