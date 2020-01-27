{
    let botonCapitalizar,inputCapitalizar,botonInvierte,inputInvierte,botonCamel,inputCamel,botonSinCamel,inputSinCamel,inputTexto,botonFinaliza,inputFinaliza,botonEmpieza,inputEmpieza,botonDNI,inputDNI;

    let capitalizar = function(){
        inputCapitalizar.value = inputCapitalizar.value.replace(/\b\w/g, l => l.toUpperCase());
    }

    let invierte = function(){
        let cadena = "";
        for(const LETRA of inputInvierte.value){
            if(LETRA === LETRA.toUpperCase())
                cadena += LETRA.toLowerCase();
        
            else
                cadena += LETRA.toUpperCase();  
        }
        inputInvierte.value =  cadena; 
    }

    let camel = function(){
        inputCamel.value = inputCamel.value.replace(/\b\w/g, l => {
            cadena = l.trimLeft();
            return cadena.toUpperCase();
        })
    }

    let sinCamel = function(){
        inputSinCamel.value = inputSinCamel.value.replace(/([A-Z])/g, ' $1');
    }


    let init = function(){
        botonCapitalizar = document.getElementById("botonCapitalizar");
        inputCapitalizar = document.getElementById("inputCapitalizar");

        botonInvierte = document.getElementById("botonInvierte");
        inputInvierte = document.getElementById("inputInvierte");

        botonCamel = document.getElementById("botonCamel");
        inputCamel = document.getElementById("inputCamel");

        botonSinCamel = document.getElementById("botonSinCamel");
        inputSinCamel = document.getElementById("inputSinCamel");

        inputTexto = document.getElementById("inputTexto");
        spanTexto = document.getElementById("spanTexto");

        botonFinaliza = document.getElementById("botonFinaliza");
        inputFinaliza = document.getElementById("inputFinaliza");

        botonEmpieza = document.getElementById("botonEmpieza");
        inputEmpieza = document.getElementById("inputEmpieza");

        botonDNI = document.getElementById("botonDNI");
        inputDNI = document.getElementById("inputDNI");



        botonCapitalizar.addEventListener("click",capitalizar);
        botonInvierte.addEventListener("click",invierte);
        botonCamel.addEventListener("click",camel);
        botonSinCamel.addEventListener("click",sinCamel);


    };

    document.addEventListener("DOMContentLoaded",init);
}