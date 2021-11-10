console.log('Metodos y el objeto this')

//Los metodos no son otra cosa que las funciones declaradas de un objeto

var persona = {
    
    //Propiedades
    nombre : 'joaquin',
    apellido : 'sayago',
    edad : 35,
    escolaridad : 'posgrado',
    profesion : 'ingeniero',

    //Métodos. Su definicion utiliza la misma nomenclatura clave :  valor, por lo tanto
    imprimirNombreCompleto : function() {
        console.log(`El nombre de la persona es: ${this.nombre} ${this.apellido}`)
    },

    direccion : {
        calle : 'aguamarina',
        colonia : 'fovissste',
        estado : 'veracruz',
        pais : 'Mexico',

        imprimirDireccion : function(){
            console.log(this)

            var self = this

            var nuevadireccion = function(){
                console.log(this)

                console.log(`vive en ${self.pais} en el estado de ${self.estado}`)
            }

            nuevadireccion()

            
        }

    },



    imprimirEdad : function () {
        console.log(`Tiene una edad de ${this.edad}`)
    }
}

persona.imprimirNombreCompleto()

//persona.nombre = "Maria"

persona.imprimirNombreCompleto()

persona.direccion.imprimirDireccion()

