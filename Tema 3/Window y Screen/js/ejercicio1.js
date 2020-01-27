{

    let crearLi = function(contenido){
        let li = document.createElement('li');
        li.innerText = contenido;
        return li;
        
    }

    let init = function(){
        let ul = document.createElement('ul');

        ul.appendChild(crearLi('window.screen.availHeight: ' + window.screen.availHeight));
        ul.appendChild(crearLi('window.screen.height: ' + window.screen.height));
        ul.appendChild(crearLi('window.outerHeight: ' + window.outerHeight));
        ul.appendChild(crearLi('window.innerHeight: ' + window.innerHeight));

        document.getElementById('contenedor').appendChild(ul);
    };

    document.addEventListener("DOMContentLoaded", init);
}