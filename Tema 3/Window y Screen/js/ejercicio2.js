{
    let botonInicio;
    let botonFin;
    let botonBajarLinea;
    let botonSubirLinea;
    let botonBajarPagina;
    let botonSubirPagina;

    let init = function(){
        botonInicio = document.getElementById("inicio");
        botonFin = document.getElementById("fin");
        botonBajarLinea = document.getElementById("bajarLinea");
        botonSubirLinea = document.getElementById("subirLinea");
        botonBajarPagina = document.getElementById("bajarPagina");
        botonSubirPagina = document.getElementById("subirPagina");
        
        botonInicio.addEventListener("click", function(){
            window.scrollTo(0,0);
        });
        botonFin.addEventListener("click", function(){
            window.scrollTo(0,document.body.clientHeight);
        });
        botonBajarLinea = addEventListener("click", function(){
            window.scrollBy(0,1);
        });  
        botonSubirLinea = addEventListener("click", function(){
            window.scrollBy(0,-1);
        });
        botonBajarPagina = addEventListener("click", function(){
            window.scroll(0,window.scrollY + window.innerHeight);
        });
        botonSubirPagina.addEventListener("click", function(){
            window.scroll(0,window.scrollY - window.innerHeight);
        });
    };

    document.addEventListener("DOMContentLoaded", init);
}