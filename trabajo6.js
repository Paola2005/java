//crear un arreglo de 10 posiciones de numeros con valores aleatorios. muestra por consola el indice y el valor al que corresponde. usa dos metodos uno para llenar valores y otro para mostar

const aleatorios = Array.from({ length: 10 }, (v, i) => Math.floor(Math.random() * 100));


for (let i = 0; i < aleatorios.length; i++)
{
    console.log(i,":", aleatorios[i]);
}



function nose(){
    let array=[];
    for (let i = 0; i < 10; i++){
        array.push(Math.floor(Math.random() * 100));
    }
    return array;

}

    