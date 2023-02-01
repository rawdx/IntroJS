function cambiaColor(colorin){

 document.bgColor = colorin;
 
}

function cambiaTitulo(texto){ 
    document.title = texto;
 
}

function url() {
		document.write(document.location);
}

function cookies() {
	document.cookie = "nombre=Pepe";
	document.cookie = "apellido=Garcia";
	document.write(document.cookie);

}

function ultimaMod() {
		document.write("La fecha de última modificación del documento es: " + document.lastModified);
}