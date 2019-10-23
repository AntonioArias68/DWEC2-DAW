{
    let elementoDiv;

    let informacion = function (elEvento) {
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
    };

    let muestraInformacion = function(mensaje) {
        let texto = '<h1>'+mensaje[0]+'</h1>';
        for(var i=1; i<mensaje.length; i++) {
            texto += '<p>'+mensaje[i]+'</p>';
        }
        elementoDiv.innerHTML = texto;
    };

    let tamanoVentanaNavegador = function(){
        return [window.innerWidth, window.innerHeight];
    };

    let init = function(){
        elementoDiv = document.getElementById("info");

        document.addEventListener("click", informacion);
    };

    document.addEventListener("DOMContentLoaded", init);

}