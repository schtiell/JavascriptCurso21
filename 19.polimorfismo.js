/*
    Polimorfismo

    La palabra polimorfismo se refiere al hecho de tener varios métodos con el mismo nombre y la misma implementación.
    
*/

function determinaDato (a){
    if (a === undefined){
        console.log("a es undefined no se que hacer")
    }

    if (typeof a === "number"){
        console.log("a es igual un numero y puedo hacer operaciones con numeros")
    }

    if(typeof a === "string"){
        console.log("a es un string y puedo hacer operaciones con textos")
    }

    if (typeof a === "object"){
        console.log("a es un objeto y puede hacer operaciones con objetos")

        if (a instanceof Number){
            console.log("a una instancia Numerica")
        }
    }
}

var a = function(){}
determinaDato(a)