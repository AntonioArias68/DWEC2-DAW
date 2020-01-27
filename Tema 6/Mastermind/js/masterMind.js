/**
 * MasterMind
 * @author Rafael Lopez
 */

masterMind = (function(){
    const COLORES = ["rojo","blanco","negro","amarillo","naranja","marrón","azul","verde"];
    const CASILLAS = 4;
    let lineaGanadora;

    let init = function(){
        lineaGanadora = [];
        for (let i = 0; i < CASILLAS; i++)
            lineaGanadora.push(COLORES[Math.floor(Math.random() * COLORES.length)]);
    }

    let mostrar = function(){
        console.log(lineaGanadora);
        lineaGanadora.forEach(function(element,index) {
            console.log("Casilla "+index+": "+element);
        });
    }

    let comprobarCoincidencia = function(intento){
        let combinacion = [];
        let clonLineaGanadora = lineaGanadora.slice();
    
        intento.forEach(function(element,index) {
            if(element==clonLineaGanadora[index]){
                combinacion.push("fichaNegra");
                clonLineaGanadora[index] = null;
            }
        });

        intento.forEach(function(element) {
            let index = clonLineaGanadora.indexOf(element);
            if(clonLineaGanadora.indexOf(element) != -1){
                combinacion.push("fichaBlanca");
                clonLineaGanadora[index] = null;
            }
        });

        while(combinacion.length<CASILLAS) {
            combinacion.push("fichaVacia");
        }
        
        return combinacion;
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobarCoincidencia: comprobarCoincidencia
    };
    
 })();