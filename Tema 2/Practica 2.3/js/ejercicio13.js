{
  
    let lista;
    let boton;
  
    let anadeLista = function () {
      let elemento = document.createElement("li");
  
      elemento.appendChild(document.createTextNode("Elemento de prueba"));
  
      lista.appendChild(elemento);
    }
  
    let inicio = function () {
      lista = document.getElementById("lista");
      boton = document.getElementById("boton");
      boton.addEventListener("click", anadeLista);
    }
  
    document.addEventListener("DOMContentLoaded", inicio);
  
}