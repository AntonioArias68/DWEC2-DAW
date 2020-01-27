{
    let crearLi = function(contenido){
        let li = document.createElement('li');
        li.innerText = contenido;
        return li;
        
    }

    let init = function(){
        let ul = document.createElement('ul');

        ul.appendChild(crearLi('Servidor: ' + location.host));
        ul.appendChild(crearLi('Protocolo: ' + location.protocol));
        ul.appendChild(crearLi('Ruta: ' + location.href));

        document.getElementById('contenedor').appendChild(ul);
    };

    document.addEventListener("DOMContentLoaded", init);
}