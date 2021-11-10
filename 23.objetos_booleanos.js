/*
    Objetos booleanos
    
    El constructor Boolean() se usa para crear objetos Boolean.
    Por defecto los objetos booleanos retornan false
*/

var a = true
var b = false


var c = new Boolean()

console.log(c)

//Creación de objetos Boolean con un valor inicial de false
var bNoParam = new Boolean()
var bZero = new Boolean(0)
var bNull = new Boolean(null)
var bEmptyString = new Boolean('')
var bfalse = new Boolean(false)
var noDefinida = new Boolean(undefined)

console.log(bNoParam, bZero, bNull, bEmptyString, bfalse, noDefinida)

// Creación de objetos Boolean con un valor inicial de true
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});

console.log(btrue, btrueString, bfalseString, bSuLin, bArrayProto, bObjProto)