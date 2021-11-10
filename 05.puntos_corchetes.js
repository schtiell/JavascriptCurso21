console.log('puntos y corchetes')

var persona = {
    nombre : 'joaquin',
    apellido : 'sayago',
    edad : 35,
    direccion : {
        calle : 'marina',
        numero : 13,
        ciudad : 'xalapa',
        estado : 'veracruz',
        edificio : {
            nombreEdificio : 'perote',
            telefonoEdificio : '2288334455',
            colorEdificio : 'verde',
            piso : 'segundo'
        }
    },
    telefono : '2281828415',
    datosTrabajo : {
        nombreTrabajo : 'SEFIPLAN',
        areaTrabajo : 'Servidores',
        telTrabajo : '2288421400',
        extTrabajo : '3816',
        puesto : 'Jefe de oficina',
        actividades : 'Sys-admin'
    }
}

//NOTACION DE PUNTO

console.log(persona.nombre)
console.log(`${persona.nombre} nacio en ${persona.direccion.ciudad}`)

//insertar mas propiedades en un objeto

persona.escolaridad = 'posgrado'
persona.direccion.codigoPostal= '91020'

//Al imprimirse todo el objeto deben encontrarse las 2 nuevas propiedades agregadas
console.log(persona)

//Mejor manerea de trabajar con objetos anidados
var edificio = persona.direccion.edificio

edificio.nombreGerente = 'Rodrigo Salas'
console.log(edificio)



//NOTACION DE CORCHETE

console.log(persona['direccion']['edificio']['nombreGerente'])

var campo = 'telefono'

console.log(persona[campo])