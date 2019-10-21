function muestraOculta(idparrafo) {
    let parrafo = document.getElementById('contenidos_' + idparrafo);
    let enlace = document.getElementById('enlace_' + idparrafo);

    if(parrafo.style.display == "" || parrafo.style.display == "block"){
        parrafo.style.display = "none";
        enlace.innerHTML = "Mostrar parrafo";
    }
    else{
        parrafo.style.display = "block";
        enlace.innerHTML = "Ocultar parrafo";

    }

}