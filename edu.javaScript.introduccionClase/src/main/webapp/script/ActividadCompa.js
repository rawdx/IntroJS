function Solucion() {
	let opcion = prompt('Introduce una opción');
	var cuenta = 45 - 56 * 45 / 7 - 4;
	switch (opcion) {
		case "1":
			document.write("Calculadora:<br>" + cuenta);
			break;
		case "2":
			document.write("Tipo de datos:<br>" + typeof(cuenta));
			break;
		case "3":
			document.write("Un tren ha recorrido 480 Km. en 6 horas. ¿Cuánto tardará en recorrer 240 Km? (Solución en consola).<br>");
			console.log("240 * 6 / 480 = " + 240 * 6 / 480);
			break;
	}
}