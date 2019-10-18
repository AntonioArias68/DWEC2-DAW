function esPalindromo(cadena){

    if(JSON.stringify(cadena.replace(/ /g, "").toLowerCase().split(""))==JSON.stringify(cadena.replace(/ /g, "").toLowerCase().split("").reverse()))
        return "La cadena es palindromo.";
    
    else
        return "La cadena no es palindromo.";
}

alert(esPalindromo(prompt("Introduce una cadena de texto:")));