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
    
    muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
}
function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(var i=1; i<mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
    }
}
function tamanoVentanaNavegador(){
    return [window.innerWidth, window.innerHeight];
}
document.onclick = informacion;