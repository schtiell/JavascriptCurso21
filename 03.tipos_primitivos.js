//TIPOS DE DATOS PRIMITIVOS
var num = 10
var str = "string"
var bool = true
var und = undefined
var nul = null

console.log('Los tipos primitivos son numero, string, booleanos, nulos, indefinidos')

console.log('Las variables no están casadas con un tipo de dato especifico, a esto se le llama escritura dinamica de variables')


//OBJETOS
var obj = {
    //Nomenclatura de pares
    //clave : valor
    //key : value

    //Propiedades del objeto, las cuales van separadas por ',' a excepción del ultimo valor
    numero : 10,
    texto : 'nuevo objeto',
    objetoHijo : {
        telefono : '2288334455',
        nombreHijo : 'Joaquin',
        edadHijo : 35,
        escolaridad : 'posgrado'
    }
};


console.log(obj.objetoHijo.escolaridad)