function cadenaTextoEs(cadena){
    if (cadena == cadena.toUpperCase())
        return "La cadena de texto es mayúsculas.";

    else if(cadena == cadena.toLowerCase())
        return "La cadena de texto es minúsculas.";

    else
        return "La cadena de texto es una mezcla de mayúsculas y minúsculas.";
}

alert(cadenaTextoEs(prompt("Introduce una cadena de texto:")));