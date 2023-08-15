//########################################
//Trabajo en clase
//########################################

//Escribe una función que tome un array de números y un valor objetivo
//como entrada, y devuelva un array de arrays que contengan pares de
//números en el array original que sumen al valor objetivo.


function arreglo(numero, suma) {
    let parejas = []; //aca se almacenan las parejas que suman el valor de 10
    //el length es para obtener la longitud o cantidad de elementos
    for (i = 0; i < numero.length; i++) { // Itera a través de los elementos de la funcion numero.
        for (j = 1; j < numero.length; j++) { // Itera a través de los elementos de la funcion numero a partir de la posición siguiente a i
            if (numero[i] + numero[j] == suma) { // Verifica si la suma de los elementos es igual al valor suma
                parejas.push([numero[i], numero[j]]); // Inserta la pareja de elementos a la funcion parejas 
            }
        }
    }
    
    return parejas; // Devuelve el arreglo que contiene las parejas que cumplen con la condición
}

console.log(arreglo([2, 4, 3, 6, 9, 8], 10)); // Llama a la función con el arreglo [2, 4, 3, 6, 9, 8] y el valor 10 como argumentos, luego imprime el resultado.


//Desarrolado por: Jenny Paola Velasco Manrique
