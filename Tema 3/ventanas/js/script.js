{
    let buttonCerrar;

    let cerrarVentana = function(){
        window.close();
    }

    let init = function(){
        buttonCerrar = document.getElementById("pulsaCerrar");

        buttonCerrar.addEventListener("click", cerrarVentana);

    };

    document.addEventListener("DOMContentLoaded", init);
}