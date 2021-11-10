/*
    Objeto string

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
*/


//Objeto string hereda los prototipos   
var cadena = new String("Joaquin")

var cadena_2 = "SAYAGO"
console.log(cadena)

//Convierte un string a mayusculas
console.log(cadena.toUpperCase())

//Convierte un string a minusculas
console.log(cadena_2.toLowerCase())

//El método indexOf()devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
console.log(`La entra q está en la posición ${cadena.indexOf("q")}`) 

//El  método lastIndexOf() devuelve la posicion (indice) en la que se encuentra
console.log(cadena_2.lastIndexOf("A"))

//Concatena 2 cadenas insertando un espacio en blanco entre ellas y convirtiendo a minusculas la segunda cadena
let concatenar = cadena.concat(' ',cadena_2.toLocaleLowerCase())
console.log(concatenar)

/*substr() devuelve los caracteres de una cadena que comienzan en una localización especificada y de acuerdo al número de caracteres que se especifiquen.
imprime desde el indice cero, hasta encontrar el primer espacio
*/
console.log(concatenar.substr(0, concatenar.indexOf(" ")))

//Crea un arreglo con los elementos del string, identificandolos por espacios en blanco
let separar_palabras = concatenar.split(" ")
console.log(separar_palabras)

//El metodo prototipo split permite seccionar strings y poder saber el numero de palabras para el siguiente ejemplo
console.log(`El string tiene ${separar_palabras.length} palabras`)