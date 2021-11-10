//Ciclo for

let array = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < array.length; i++) {

    if (array[i] === 7){
        continue;
    }

    console.log(`El valor de i en el array es: ${array[i]}`);
    
}

//Foreach para recorrer un arreglo
array.forEach(function(valor){

    console.log(`El valor es: ${valor}`)
})

//some() comprueba si algún elemento del array pasa una prueba (proporcionado como una función).
array.some(function(index,value){
    console.log(index,value);

    //Ya que el ciclo foreach no permite utilizar el statement break, podemos usar en su lugar el metodo some
    return index === 3; 
})
