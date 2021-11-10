//Rotulando ciclos for
//Permite asignar un titulo a un ciclo for, por llamarlo de alguna forma, esta debe ser la linea inmediata que antesceda a un ciclo for. Permite identificarlo y en casos de for anidados permite utilizar los statements break o continue para indicarles a donde se dede comenzar o regresar

cicloFor_principal:
for (let i = 0; i < 3; i++) {
    console.log(`Valor de i: ${i}`);    

    cicloFor_secundario:
    for (let j = 0; j < 3; j++) {
        console.log(`Valor de j es: ${j}`);
        
        for (let k = 0; k < 3; k++) {
            console.log(`Valor de k es: ${k}`);
            break cicloFor_principal;
            
        }
        
    }
}