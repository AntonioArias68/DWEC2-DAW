let elementoDiv;

function informacion(elEvento) {
    let posicionVertical, posicionHorizontal;
    const  coordenadaX = elEvento.clientX;
    const  coordenadaY = elEvento.clientY;
    const  [dimensionX, dimensionY] = tamanoVentanaNavegador();
    if(coordenadaX > dimensionX/2)
        posicionVertical = "Derecha";
    
    else
        posicionVertical = "Izquierda";
    
    if(coordenadaY > dimensionY/2)
        posicionHorizontal = "Abajo";

    else
        posicionHorizontal = "Arriba";
    
    return muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
}
function muestraInformacion(mensaje) {
    let texto = '<h1>'+mensaje[0]+'</h1>';
    for(var i=1; i<mensaje.length; i++) {
        texto += '<p>'+mensaje[i]+'</p>';
    }
    elementoDiv.innerHTML = texto;
}
function tamanoVentanaNavegador(){
    return [window.innerWidth, window.innerHeight];
}

let inicio = function(){
    elementoDiv = document.getElementById("info");

    document.addEventListener("click", informacion);
};

document.addEventListener("DOMContentLoaded", inicio);


//document.onclick = informacion;