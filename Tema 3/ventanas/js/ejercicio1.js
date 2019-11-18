{
    let button;
    let ventana;

    let crearVentana = function(elEvento){
        const alturaVentana = 200;
        const anchoVentana = 300;
        const topVentana = 0;
        const leftVentana = 0;

        ventana = window.open("","Nueva Ventana","width="+alturaVentana+",height="+anchoVentana+",top="+topVentana+",left="+leftVentana);
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