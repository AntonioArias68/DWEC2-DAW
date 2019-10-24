{
    let elementoTextArea;
    let elementoDivInfo;

    let comprobarTamanio = function (elEvento) {
        const tamanioMaximo = 100;
        let valorTextArea;
        if (elementoTextArea.value.length > tamanioMaximo)
            elementoTextArea.value = elementoTextArea.value.slice(0, (-elementoTextArea.value.length+tamanioMaximo));

        elementoDivInfo.innerHTML = "Te quedan un total de " + (tamanioMaximo-elementoTextArea.value.length) + " caracteres.";

        }

    let init = function(){
        elementoTextArea = document.getElementById("texto");
        elementoDivInfo = document.getElementById("info");

        elementoTextArea.addEventListener("input", comprobarTamanio);
    };

    document.addEventListener("DOMContentLoaded", init);

}