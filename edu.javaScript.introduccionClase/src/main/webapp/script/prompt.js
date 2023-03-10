function edad() {
	var edad = prompt("Introduce tu edad:", 10);
	edad = (edad == null) ? 18 : edad;
	
	comprobarEdad(edad);
}

function comprobarEdad(edad){
		
	if (edad < 18)
		document.write("Eres menor de edad.")
	else
		document.write("Eres mayor de edad.")
}