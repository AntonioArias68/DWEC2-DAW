{
    let canvas;
    const EVENTOS = ["auxclick","click","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];

    //Funcionamiento sacado de https://stackoverflow.com/questions/1484506/random-color-generator
    let colorAleatorio = function(){
        return '#' + (Math.random().toString(16) + "000000").substring(2,8);
    }

    let pintarCuadrados = function(){
        for(indice in canvas){
            let ctx = canvas[indice].getContext('2d');
            ctx.fillStyle = colorAleatorio();
            ctx.fillRect(0,0,200,200);
            ctx.font="18px Arial";
            ctx.fillStyle = colorAleatorio();
            ctx.fillText(canvas[indice].getAttribute("id"),10,30);
            ctx.restore();
        }
    }

    let mostrarInfo = function(eventito){
        let ctx = eventito.target.getContext("2d");
        ctx.save();
        ctx.fillStyle = colorAleatorio();
        ctx.font="14px Arial";
        ctx.fillStyle = colorAleatorio();
        ctx.fillText("Coordenadas: "+eventito.offsetX+","+eventito.offsetY,10,50);
        ctx.fillText("Botones: "+eventito.button+","+eventito.buttons,10,70);
    }

    let init = function(){
        canvas = document.getElementsByTagName("canvas");

        document.getElementsByTagName("main")[0].addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        EVENTOS.forEach(function(element,index) {
            canvas[index].addEventListener(element,function(e){
                mostrarInfo(e);
            });
        });

        pintarCuadrados();
    }
    document.addEventListener("DOMContentLoaded", init);
}