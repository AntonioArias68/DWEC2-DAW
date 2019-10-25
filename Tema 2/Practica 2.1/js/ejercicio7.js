{
  let resultado = 1;
  const numero = prompt("Introduce un número:");

  for (let i = numero; i > 0; i--)
    resultado = resultado * i;

  alert("El numero factorial es " + resultado);
}