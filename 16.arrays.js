/*
    Arryas
    Son colecciones de datos sin importar el tipo.
    La primera posición del arreglo es 0
*/

console.log('Uso de arreglos con js')

var arreglo = [["x","y","z"],2,3,4,["a","b","c",["!","#","$","/","(",")"],"e","f"],6,7,8,9,10];


let i
for (i=0; i<arreglo.length; i++){
    
    console.log(arreglo[i]);
    
    for( let j= 0; j<arreglo[i].length; j++){   
        //console.log (arreglo[j])

        for(let k=0; k<arreglo[i][j].length; k++){
            console.log(arreglo[i][j][k])
        }
    }
        
}

console.log(arreglo.reverse())

//Metodo prototype.map para modificar los elementos que integran el array
arreglo = arreglo.map(element => {
    element *=2
    return element
})

console.log(arreglo)