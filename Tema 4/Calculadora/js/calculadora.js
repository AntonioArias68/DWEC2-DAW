{    
    let calculadora = {  
        input: undefined,
        array : [],
        arrayTexto : ["CE","←","%","+","7","8","9","-","4","5","6","x","1","2","3","÷","0","±",".","="],

        "crearCalculadora": () =>{
                
                calculadora.input = info.appendChild(document.createElement("input"));
                calculadora.input.classList.add("inputNumber");
                calculadora.input.setAttribute("value","0");
                calculadora.input.setAttribute("readonly","readonly");
        
                for(let i=0;i<20;i++){
                    calculadora.array.push(info.appendChild(document.createElement("button")));
                }
        
                for(let i=0;i<calculadora.array.length;i++){
                    calculadora.array[i].innerHTML="";
                    calculadora.array[i].classList.add("button");
                    calculadora.array[i].setAttribute("id","boton"+i);
                }
                
                for(let i =0;i<calculadora.arrayTexto.length;i++){
                    calculadora.array[i].innerHTML+=calculadora.arrayTexto[i];
                }
            },  
    }
    let init = () => {

        info = document.getElementById("calculadora");
        calculadora.crearCalculadora();
        calculadora.comportamiento();

    }

    document.addEventListener("DOMContentLoaded", init);

}
