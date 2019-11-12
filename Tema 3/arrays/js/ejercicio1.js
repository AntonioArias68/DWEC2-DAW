/*
Ejercicio 1. Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.

Atributos de la lista:
    -value: Valor de un índice
    -index: Indice
    -array: El array
*/

{
    let array = ['a','b','c','d','f','g'];
    let elementoLista;

    let recorrerArray = function (value, index, array){
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode("Array["+index+"]="+value));
        elementoLista.appendChild(elemento);
    };
    
    let init = function(){
        elementoLista = document.getElementById("lista");
        array.forEach(recorrerArray);
    };

    document.addEventListener("DOMContentLoaded", init);
}