//########################################
//los 4 tipos de funciones y un ejercicio
//########################################


//funcion que no retorna ni recibe parametros
function mensaje(){
    console.log("Esto es un mensaje")
}
mensaje()
console.log(mensaje())

//funcion que reorna pero no recibe parametros
function retorno(){
    return "Hola world"
}
retorno()
console.log(typeof retorno())

//funcion que no retorna pero recibe parametros
function areaRectangulo (b,h)
{
    resultado=b*h
    console.log(resultado)
}
areaRectangulo(5,6)

//funcion que retorna y recibe parametros
function concatenacion (a,b){
    return a+b
}
console.log(concatacion("campus", "lands"))
function calcular(x){
    actual=2023
    final=2023-x
    console.log("El año en el que naciste fue:"+final)
}
calcular(23)

//Ejercicio en el que se coloca una medida en celcius y se pasa a fahrenheit
function calcular(x){
    //ecuacion para convertir a fahrenheit 
    val=32+(9*x/5)
    console.log("La conversion de celcius a fahrenheit es:"+val )
}
calcular(21)

//Desarrolado por:Jenny Paola Velasco Manrique