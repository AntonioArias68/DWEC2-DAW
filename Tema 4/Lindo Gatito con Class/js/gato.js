/* 
Clase Gato

Rafael López Cruz
*/
class Gato {
    static PESO_MAXIMO = 15;
    static PESO_MINIMO = 1;
    constructor(nombre = 'Garfield', fechaNacimiento = '2005-06-19', raza = 'Otros', peso = '7') {
        this.nombre = nombre;
        if ((new Date().getFullYear() - new Date(fechaNacimiento).getFullYear()) < 35)
            this.fechaNacimiento = fechaNacimiento;
        else
            throw new Error("Edad inválida. Solo hay registros de gatos de hasta 35 años de edad!");
        if (peso > 0 && peso < 16)
            this.peso = parseInt(peso);
        else
            throw new Error("Peso inválido. Introduce un valor entre 1 y 15");
        this.raza = raza;
        this.vivo = true;
        this.estado = "bailando";
    }

    morision() {
        this.vivo = false;
    }

    comer() {
        if (!this.vivo)
            return;
        this.estado = "comiendo";
        this.peso += 1;
        if (this.peso > Gato.PESO_MAXIMO)
            this.morision();
    }

    jugar() {
        if (!this.vivo)
            return;
        this.estado = "jugando";
        this.peso -= 1;
        if (this.peso < Gato.PESO_MINIMO)
            this.morision();
    }
    
    edad() {
        if (!this.vivo)
            return;
        let fechaHoy = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);
            let anios = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();
            let mesDiferencia = fechaHoy.getMonth() - fechaNacimiento.getMonth();
            if (mesDiferencia < 0 || (mesDiferencia === 0 && fechaHoy.getDate() < fechaNacimiento.getDate()))
                anios--;
            return anios;
    }
}