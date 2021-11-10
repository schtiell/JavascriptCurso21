/*
    Operaciones con fechas
*/

var fecha = new Date()
console.log(`La fecha de hoy es: ${fecha}`)


//Sumar 5 dias a la fecha actual. Esto fija el dia 15 del mes y año actual
fecha.setDate(15)
console.log(`La fecha fijada de hoy es: ${fecha}`)

//32 no corresponde a ninguna fecha asi que 32 en el mes actual octubre con 31 dias es 1 de noviembre
fecha.setDate(32)
console.log(`La fecha 32 es: ${fecha}`)

//Se crea un nuevo prototipo llamado sumarDias en el objeto Date
let fecha_2 = new Date()

Date.prototype.sumarDias = function (dias) { 

    //this para llamar al propio metodo setDate del objeto Date y this.getDate() para llamar al propio metodo
    this.setDate( this.getDate() + dias)
    return this
}

console.log(fecha_2.sumarDias(10))

//Prototipo creado para sumar años
Date.prototype.sumarAnio = function (anios) {
    this.setFullYear( this.getFullYear() + anios)
    return this
}

console.log(fecha_2.sumarAnio(10))