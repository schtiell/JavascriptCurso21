console.log('Funciones de primera clase')

function a(){
    console.log('funcion a')
}

//Las funciones son tratadas como objetos por JS, por lo tanto tienen sus propiedades definidas.

//Utilizando la consola del navegador y escribiendo el nombre de la funcion. apareceran las propiedad del objeto/funcion. 

//Por lo tanto al escribir el siguiente codigo se agrega la propiedad nombre, por lo que haciendo el paso anterior debe aparecer en la lista
a.nombre = 'joaquin'


//agregando mas propiedades a la funcion/objeto

a.direccion = {
    calle : 'aguamarina',
    numero : 13,
    edificio : {
        nombreEdificio : 'acayucan',
        piso : 'tercero',
        color : 'azul',
        areaVerde : 'No',
        gimnacio : 'si',
        gerente : 'jorge anibal'
    },
    colonia : 'fovissste',
    ciudad : 'xalapa',
    localidad : 'xalapa',
    estado : 'veracruz'
}