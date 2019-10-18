function numeroEs(numero){
    if (numero % 2 == 0)
        return "par";

    else 
        return "impar";
}

alert("El numero es " + numeroEs(prompt("Introduce un número:")));