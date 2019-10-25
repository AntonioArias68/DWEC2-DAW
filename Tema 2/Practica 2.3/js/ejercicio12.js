{
    let elemento;
    let enlace;
  
    let muestra = function () {
      elemento.className = "visible";
      enlace.className = "oculto";
    }
  
    let init = function () {
      elemento = document.getElementById("adicional");
      enlace = document.getElementById("enlace");
      enlace.addEventListener("click", muestra);
    }

    document.addEventListener("DOMContentLoaded", init);
  
}