//################################################################
//Trabajo que hice en la tarde porque estaba desparchada
//################################################################

//Se pide que se haga una lista de numeros del 0 al 10 y que se informe cuales numero son pares o impares

for (let i = 0; i <=10; i++){
    if (i%2==0){
        console.log("El numero",i, "Es par");
    }
    else{
        console.log("El numero",i, "Es impar");
    }
}


//################################################################
//Trabajo en clase
//################################################################



pares=0
imapres=0

    for (let i = 1; i <=578934; i++){

        if (i%2==0){
            pares+=i
            
            
        }
        else{
            imapres+=i
        }
    }
    console.log(pares)
    console.log(imapres)

    
//Desarrolado por: Jenny Paola Velasco Manrique