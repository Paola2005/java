// ###################################
// Condicionales, bucles y arrays
//####################################


//Ejemplos con condicionales if y else 
let booleano= false
if (booleano==true) {
    console.log("Es verdadero")
} else{
    console.log("Es falso")
} 


let numero=21
if (numero==21){
    console.log("Eres un 21")
}
//en java no exixte elif, se cambia por else if 
else if (numero==12){
    console.log("Eres un 12")
}
else{
    console.log("No es un numero")
}


//bucle while para que se rompa y que solo se repita una vez se coloca el break, sino se repite infinitamente
let booleanito =true
while (booleanito==true){
    console.log("Hola")
break

}

//bucle for para cuando conocemos el numero de repeticiones que queremos 
for (let i=0; i<21; i++) {
    console.log(i)
}


//Los arrays, son como las listas de python
let arreglo = ["Marianita", "Duban", "Campus"]
console.log(arreglo[0])
//Se insertan elementos 
arreglo.push("lands")
console.log(arreglo)
//se eliminan elementos, lo mismo pasaba con python
arreglo.pop()
console.log(arreglo)
//para buscar un elemento en el array
console.log(arreglo.indexOf("lands"))


//Desarrolado por:Jenny Paola Velasco Manrique