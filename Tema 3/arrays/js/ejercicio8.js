/*
Indica la diferencia entre los siguientes métodos, y 
demuestra su uso con algunos arrays:  

Array.prototype.forEach():
Recorre cada elemento del array y ejecuta una función por cada valor.

Array.prototype.every():
Devuelve true si todos los elementos pasan la condición y false si alguno no
la cumple.

Array.prototype.some():
Devuelve true si algunos de los elementos pasan la condición y false si ninguno
lo cumple.

Array.prototype.filter():
Crea un nuevo array con todos los elementos que cumplan una condición.

*/
{

    let elementoLista;
    let elementoDivArray;
    let array = [1,2,3,4,5,'seis','siete',8,'nueve'];

    let recorrerArray = function (value, index, array){
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode("Array["+index+"]="+value));
        elementoLista.appendChild(elemento);
    };
    
    function mayorCinco(valor){
        return valor > 5;
    }
    
    function menorDiez(valor){
        return valor < 10;
    }
    
    function eliminarCinco(valor){
        return valor < 5;
    }


    let init = function(){
        let texto;

        elementoLista = document.getElementById("lista");
        elementoDivArray = document.getElementById("arrays");

        array.forEach(recorrerArray);

        texto = ("Array.prototype.every: "+array.every(mayorCinco));
        texto = texto + (" Array.prototype.some: "+array.some(menorDiez));
        texto = texto + (" Array.prototype.filter: "+array.filter(eliminarCinco));

        elementoDivArray.innerHTML = texto;
    };

    document.addEventListener("DOMContentLoaded", init);
}