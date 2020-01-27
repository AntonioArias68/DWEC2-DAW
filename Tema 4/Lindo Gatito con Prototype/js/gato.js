/* 
Clase Gato

Rafael López Cruz
*/

{
    function Gato(nombre = 'Garfield',fechaNacimiento='2005-06-19', raza='Otros', peso='7'){
        this.nombre = nombre;
        if((new Date().getFullYear()-new Date(fechaNacimiento).getFullYear())<35)
            this.fechaNacimiento = fechaNacimiento;
        else
            throw new Error("Edad inválida. Solo hay registros de gatos de hasta 35 años de edad!");
            
        this.setPeso;
        
        this.raza = raza;
        this.vivo = true;
        this.estado = "bailando";
    }

    Gato.prototype.setPeso = function(){
        if(peso<0 || peso>16) throw new Error("Peso inválido. Introduce un valor entre 1 y 15");

        this.peso = parseInt(peso);
    }

    Gato.prototype.PESO_MAXIMO = 15;
    Gato.prototype.PESO_MINIMO = 1;


    Gato.prototype.morision = function(){
        this.vivo = false;
    }

    Gato.prototype.comer = function(){
        if(!this.vivo) return;
        this.estado = "comiendo";
        this.peso+=1;
        if(this.peso> Gato.prototype.PESO_MAXIMO)
            this.morision();
    }

    Gato.prototype.jugar = function(){
        if(!this.vivo) return;
        this.estado = "jugando";
        this.peso-=1;
        if(this.peso < Gato.prototype.PESO_MINIMO)
            this.morision();
    }

    Gato.prototype.edad = function(){
        if(!this.vivo) return;

        let fechaHoy = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);
        
        anios = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();
        let mesDiferencia = fechaHoy.getMonth() - fechaNacimiento.getMonth();
        
        if (mesDiferencia < 0 || (mesDiferencia === 0 && fechaHoy.getDate() < fechaNacimiento.getDate())) 
            anios--;

        return anios;
    }
}