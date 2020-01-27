/**
 * Script que crea una nueva ventana con un botón que, al pulsarse, genera un nuevo elemento (mensaje)
 * en la nueva ventana.
 * 
 * @author Rafael López Cruz
 * @author Rafael Miguel Cruz Álvarez
 * @author Fco Javier González Sabariego
 */
{
    let nuevaVentana;
    let boton;

    /**
     * Incorpora un nuevo elemento a la nueva ventana creada
     */
    let annadeMensaje = function() {
        nuevaVentana.document.write("<p>Lourdes apruébanos!!</p>");
    }

    let init = function() {
        nuevaVentana = window.open();
        nuevaVentana.document.write("<input type=\"submit\" id=\"button\" name=\"anadir\" value=\"Púlsame\">");

        boton = nuevaVentana.document.getElementById("button");
        boton.addEventListener("click", annadeMensaje);
    }

    document.addEventListener("DOMContentLoaded", init);
}