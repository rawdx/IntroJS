//Crea un objeto de tipo mesa y muestra sus propiedades separadas por salto de linea en el documento.

function actividad() {
	class mesa {
		constructor(alto, ancho, material, numPatas) {
			this.alto = alto;
			this.ancho = ancho;
			this.material = material;
			this.numPatas = numPatas;
		}
	}
	
	var mesaClase = new mesa("0,5m", "1m", "madera", 4)
	document.write(mesaClase.alto + "<br>" + mesaClase.ancho + "<br>" + mesaClase.material + "<br>" + mesaClase.numPatas);
}
	
function ejemploAlumno() {

	class alumno {
        constructor(nombre, apellidos, edad) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
        }
    }
	var raul = new alumno("Raúl", "Cordero Diaz", 18);
	
	document.writeln(typeof(raul));
	document.writeln(raul instanceof alumno);
	document.writeln(raul instanceof Object);

	document.writeln(raul.nombre);
	document.writeln(raul.apellidos);
	document.writeln(raul.edad);
}