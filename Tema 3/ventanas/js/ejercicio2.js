{
    let button;
    let ventana = [];

    const NUM_VENTANAS = 5;

    let crearVentana = function(elEvento){
        const ALTURA_VENTANA = 200;
        const ANCHO_VENTANA = 200;
        const TOP_VENTANA = 0;
        const LEFT_VENTANA = 0;

        for (let i = 0; i < NUM_VENTANAS; i++) {
            ventana[i] = window.open("","Nueva Ventana" + i,"width="+ALTURA_VENTANA+",height="+ANCHO_VENTANA+",top="+TOP_VENTANA+",left="+LEFT_VENTANA);
            ventana[i].document.write("Ventana " + i);
            ventana[i].document.close();

        }        
    }

    let init = function(){
        button = document.getElementById("pulsa");

        button.addEventListener("click", crearVentana);
    };

    document.addEventListener("DOMContentLoaded", init);
}