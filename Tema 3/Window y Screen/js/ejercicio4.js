{

    let divContenedor;

    let reloj = function(){
        let fechaHora = new Date();
        let h = fechaHora.getHours();
        let m = fechaHora.getMinutes();
        let s = fechaHora.getSeconds();

        divContenedor.innerHTML = "<h2>"+h+":"+m+":"+s+"</h2>";
    };

    let init = function(){
        divContenedor = document.getElementById('contenedor');

        setInterval(reloj,800);

    };

    document.addEventListener("DOMContentLoaded", init);
}