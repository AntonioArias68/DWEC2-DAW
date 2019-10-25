{

    let parrafos;
    let enlaces;
    let informacion;


    let analizarDOM = function() {
        let texto;
        let numEnlacesPrueba = 0;

        texto = "N&uacute;mero de enlaces = " + enlaces.length + "<br/>";
        texto += "El penultimo enlace apunta a: " + enlaces[enlaces.length - 2].href + "<br/>";
        
        for (let i = 0; i < enlaces.length; i++)
            if(enlaces[i].href == "http://prueba" ||enlaces[i].href == "http://prueba/")
                numEnlacesPrueba++;

        texto += "N&uacute;mero de enlaces de prueba: " + numEnlacesPrueba + "<br/>";
        texto += "N&uacute;mero de enlaces en el tercer p&aacute;rrafo = " + parrafos[parrafos.length-1].getElementsByTagName('a').length;

        informacion.innerHTML = texto;
    }

    let init = function(){
        parrafos = document.getElementsByTagName("p");
        enlaces = document.getElementsByTagName("a");
        informacion = document.getElementById("informacion");
        analizarDOM();
    };

    document.addEventListener("DOMContentLoaded", init);
}