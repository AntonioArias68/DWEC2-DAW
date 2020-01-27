{    

    let crearGato = function(){
        let ventana = window.open("","","width=600,heigth=600");
        ventana.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="author" content="Rafael Lopez Cruz">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Gato</title>
                <script src="js/gato.js"></script>
                <script src="js/hijo.js"></script>
            </head>
            <body>
                <noscript>
                    <h1>Esta p&aacute;gina requiere el uso de JavaScript</h1>
                </noscript>
                <div id="container">
                    <h1 id='nombre'></h1>
                    <img src='' id='imagen' alt='Imagen del gato' width=250px height=250px>
                    <p id='info'>
                    Fecha de nacimiento: <span id='fechaNacimiento'></span><br>
                    Raza: <span id='raza'></span><br>
                    Peso: <span id='peso'></span><br>
                    <span id='edad'></span>
                    </p>
                    <p>
                    <button id='botonJugar'>Jugar</button>
                    <button id='botonComer'>Comer</button>
                    <button id='botonEdad'>Calcular edad</button>
                    </p>
                </div>
            </body>
            </html>
        `);

        ventana.document.close();
    }

    let init = function(){
        let divContainer = document.getElementById("container");
        divContainer.innerHTML=`
        <h1>Crea tú lindo Gatito</h1>
        Nombre: <input type='text' id='nombre' required><br/><br/>
        Fecha de Nacimiento: <input type='date' id='fechaNacimiento' required><br/><br/>
        Raza: <select id='raza' required>
        <option value='Siames'>Siames</option>
        <option value='Ragdoll'>Ragdoll</option>
        <option value='Azul ruso'>Azul ruso</option>
        <option value='Siberiano'>Siberiano</option>
        <option value='Persa'>Persa</option>
        <option value='Otros'>Otros</option>
        </select>
        <br/><br/>
        Peso: <input type='text' id='peso' required><br>
        <span style='color:red;' id='invalido'></span>
        <br/><br/>
        <button id='crear'>Crear lindo gatito</button>
        `;

        let botonCrearGato = document.getElementById("crear");
        botonCrearGato.addEventListener("click",crearGato);
    };

    document.addEventListener("DOMContentLoaded", init);
}