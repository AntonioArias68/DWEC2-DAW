function informacion(elEvento) {
    let posicionVertical;
    let posicionHorizontal;
    let evento = elEvento || window.event;
    let coordenadaX = evento.clientX;
    let coordenadaY = evento.clientY;
    let [dimensionX, dimensionY] = tamanoVentanaNavegador();
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
    // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
    var dimensiones = [];
    
    if(typeof(window.innerWidth) == 'number') {
        // No es IE
        dimensiones = [window.innerWidth, window.innerHeight];
    } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6 en modo estandar (no quirks)
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE en modo quirks
        dimensiones = [document.body.clientWidth, document.body.clientHeight];
    }
    
    return dimensiones;
}
document.onclick = informacion;