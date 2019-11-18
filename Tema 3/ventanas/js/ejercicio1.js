{
    let button;
    let ventana;

    let crearVentana = function(elEvento){
        const ALTURA_VENTANA = 200;
        const ANCHO_VENTANA = 200;
        const TOP_VENTANA = 0;
        const LEFT_VENTANA = 0;

        ventana = window.open("","Nueva Ventana","width="+ALTURA_VENTANA+",height="+ANCHO_VENTANA+",top="+TOP_VENTANA+",left="+LEFT_VENTANA);
        ventana.document.write("Se han utilizado las propiedades:<ul>");
        ventana.document.write("<li>height=200</li><li>width=300</li></ul>");
        ventana.document.close();
        
    }

    let init = function(){
        button = document.getElementById("pulsa");

        button.addEventListener("click", crearVentana);
    };

    document.addEventListener("DOMContentLoaded", init);
}