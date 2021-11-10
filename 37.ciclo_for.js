
let i = 0;
while (i < 10) {
    
    i ++;

    //Cuando i toma el valor de 5 no se ejecutan las lineas siguientes sino que continua con la siguiente iteración del ciclo while.
    if (i === 5){
        continue;
    }

    console.log(`El valor de i es: ${i}`);

}

let j = 0;

while (j < 10) {

    j++;

    //Cuando j toma el valor 5 se ejecuta un break que interrumpe la continuidad del ciclo.
    if (j == 5){
        break;
    }

    console.log(`El valor de j es: ${j}`);
}