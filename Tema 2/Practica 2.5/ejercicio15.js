function eventos(elEvento){
	let evento = elEvento;
	kk = evento;
	if(evento.type == 'mousemove'){
		document.getElementById('info').style.backgroundColor = '#FBFFAC';
		muestraInformacion(['Ratón','Navegador['+evento.clientX+','+evento.clientY+']','Pagina['+evento.pageX+','+evento.pageY+']']);
	}
	else if(evento.type == 'keypress'){
		document.getElementById('info').style.backgroundColor = '#66EFFF';
		let codigo = evento.charCode || evento.keyCode;
		let letra = String.fromCharCode(codigo);
		
		muestraInformacion(['Teclado','Caracter['+letra+']','Codigo['+codigo+']']);
	}
}
function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	for(var i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}
document.onmousemove = eventos;
document.onkeypress = eventos;
