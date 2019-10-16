var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce el numero del DNI sin la letra:");

var letra = prompt("Introduce la letra del DNI:").toUpperCase();


if(numero<0 || numero> 99999999)
  alert("El número del DNI es incorrecto.");

else{
  if(letras[numero%23] != letra)
    alert("La letra o el número no son correctos.");
  else
    alert("El número y la letra del DNI son correctos.");
}