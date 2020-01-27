{
    let gato;

    let mostrarInfoInterfaz = function(nombre,fechaNacimiento,raza,peso){
        document.getElementById('nombre').innerHTML = nombre;
        document.getElementById('fechaNacimiento').innerHTML = fechaNacimiento;
        document.getElementById('raza').innerHTML = raza;
        document.getElementById('peso').innerHTML = peso;
        document.getElementById('imagen').src = "img/gato.jpg";
    }

    let actualizarPesoInterfaz = function(peso, estado, vivo){
        document.getElementById('peso').innerHTML = peso;
        if(estado == "comiendo")
            document.getElementById('imagen').src = "img/comiendo.jpg";
        else if(estado == "jugando")
            document.getElementById('imagen').src = "img/ejercicio.png";
        else
            document.getElementById('imagen').src = "img/gato.jpg";


        if(!vivo){
            document.getElementById('botonJugar').disabled = true;
            document.getElementById('botonComer').disabled = true;
            document.getElementById('botonEdad').disabled = true;
            document.getElementById('imagen').src = "img/muerto.jpg";
        }
    }

    let actualizarEdadInterfaz = function(edad){
        document.getElementById('edad').innerHTML = "La edad actual es " + edad;
    }

    let init = function(){
        let nombreGato = opener.document.getElementById("nombre").value.trim();
        let fechaNacimientoGato = opener.document.getElementById("fechaNacimiento").value.trim();
        let razaGato = opener.document.getElementById("raza").value.trim();
        let pesoGato = opener.document.getElementById("peso").value.trim();
        try {
            if(nombreGato && fechaNacimientoGato && razaGato && pesoGato)
                gato = new Gato(nombreGato,fechaNacimientoGato,razaGato,pesoGato);
            else
                gato = new Gato();
            
            opener.document.getElementById("invalido").innerHTML= "";

            mostrarInfoInterfaz(gato.nombre,gato.fechaNacimiento,gato.raza,gato.peso);


            let comer = document.getElementById("botonComer");
            comer.addEventListener("click", function(){
                gato.comer();
                actualizarPesoInterfaz(gato.peso,gato.estado,gato.vivo);
            });


            let jugar = document.getElementById("botonJugar");
            jugar.addEventListener("click", function () {
                gato.jugar();
                actualizarPesoInterfaz(gato.peso,gato.estado,gato.vivo);
            });


            let edad = document.getElementById("botonEdad");
            edad.addEventListener("click", function(){
                actualizarEdadInterfaz(gato.edad());
            });


        } catch (e) {
            opener.document.getElementById("invalido").innerHTML= e.message;
            window.close();
        }
    };

    document.addEventListener("DOMContentLoaded", init);
}