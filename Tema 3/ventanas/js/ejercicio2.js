{
    let button;
    let ventanas = [];

    const NUM_VENTANAS = 5;
    let contadorVentanas = 0;

    let top_ventana=0;
    let left_ventana=0;

    let crearVentana = function(elEvento){
        const ALTURA_VENTANA = 200;
        const ANCHO_VENTANA = 200;

        for (let i = 0; i < NUM_VENTANAS; i++) {
            ventanas.push(window.open("","Nueva Ventana" + contadorVentanas,"width="+ALTURA_VENTANA+",height="+ANCHO_VENTANA+",top="+top_ventana+",left="+left_ventana));
            ventanas[ventanas.length - 1].document.write("<script src='js/script.js'></script>Ventana " + contadorVentanas + "<button id='pulsaCerrar'>Cerrar</button>");
            ventanas[ventanas.length - 1].document.close();
            contadorVentanas++;
            top_ventana = top_ventana+25;
            left_ventana = left_ventana+50;
        }
    }

    let init = function(){
        button = document.getElementById("pulsa");

        button.addEventListener("click", crearVentana);
    };

    document.addEventListener("DOMContentLoaded", init);
}