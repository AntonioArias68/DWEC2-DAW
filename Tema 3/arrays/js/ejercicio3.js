/*
Ejercicio 3. Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
*/

{
    let array = ['a','b','c','d','f','g'];
    let init = function(){
        elementoTexto = document.getElementById("texto");

        if(Array.isArray(array))
            elementoTexto.innerHTML="Este elemento es un array.";
        else
        elementoTexto.innerHTML="Este elemento no es un array.";
    };

    document.addEventListener("DOMContentLoaded", init);
}