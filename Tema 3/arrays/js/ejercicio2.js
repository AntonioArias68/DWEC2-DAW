/*
Ejercicio 2. Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
*/

{
    let array = ['a','b','c','d','f','g'];
    let init = function(){
        elementoTexto = document.getElementById("texto");
        let indice =3;
        if(indice in array)
            elementoTexto.innerHTML="El índice " + indice + " se encuentra en el array.";
        else
        elementoTexto.innerHTML="El índice " + indice + " no se encuentra en el array.";
    };

    document.addEventListener("DOMContentLoaded", init);
}