console.log('Funciones anonimas');   

// var obj = {},
// f = function () {}

// console.log('obj es un objeto y f una funcion')

/* Funcion anónima....peo no puede ser llamada
function (){
    console.log('Está es una funcion sin nombre')
}*/

// Para invocar una funcion anónima
(function () {
    console.log('Funcion anonima')
})()


function ejecutarFuncion (fn) {
    if(fn() >= .5){
        return true
    }else{
        return false
    }

}

console.log(ejecutarFuncion(function(){
    var numero = Math.random() * (0, 1)
    console.log(numero)
    return numero
}))