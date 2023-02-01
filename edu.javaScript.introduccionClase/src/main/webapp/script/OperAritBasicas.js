function Operaciones(){
	let suma = 10.25 + 0.75;
	document.write("suma: 10.25 + 0.75<br>Tipo de dato: " + typeof(suma));
	
	let numero1 = 23;
	let numero2 = 34;
	let resultadoOperacion = numero1 + numero2;
	document.write("<br><br>" + numero1 + "+" + numero2 + " = " +resultadoOperacion);
	
	let operacion = 46 + 8 * 2 / 2 + 46;
	document.write("<br><br>46 + 8 * 2 / 2 + 46 = " + operacion);
	
	let operacion2 = 46 + 8 * 2 / (2 + 46);
	document.write("<br><br>46 + 8 * 2 / (2 + 46) = " + operacion2);
}