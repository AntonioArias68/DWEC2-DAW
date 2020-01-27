
let expresiones = {
    expresionfecha: [new RegExp("^[0-9]{2}/{1}|-{1}[0-9]{2}/{1}|-{1}[0-9]{4}$"),"Error. Fechas válidas: 12/12/2012, 12-12-2012"],
    expresionDni:[new RegExp("(^[0-9]{8}-{1}| {1}[A-Za-z]{1}$)|(^[0-9]{8}[A-Za-z]{1}$)"),"Error. DNI válidos: 11111111O, 11111111-O","TRWAGMYFPDXBNJZSQVHLCKET"],
    expresionEmail: [new RegExp("[a-zA-Z0-9]+@+[a-zA-Z0-9]+.[a-z]+$"),"Error. Correo válido: mail@mail.es"]
}

let checkFecha = function(fecha){
    return (expresiones.expresionfecha[0].test(fecha) && new Date(fecha[3]+fecha[4]+"/"+fecha[0]+fecha[1]+"/"+fecha[6]+fecha[7]+fecha[8]+fecha[9]) != "Invalid Date");
}

let checkDni = function(dni){
    let numeroDni = parseInt(dni[0]+dni[1]+dni[2]+dni[3]+dni[4]+dni[5]+dni[6]+dni[7]);
    return (expresiones.expresionDni[0].test(dni.trim()) && expresiones.expresionDni[2][numeroDni%23] == dni[dni.length-1].toUpperCase());
}

let checkEmail = function(email){
    return (expresiones.expresionEmail.test(email.trim()));
}