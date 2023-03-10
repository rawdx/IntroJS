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

function Ejercicio(){
	var a = 12;
	let b = 3;
	
	if(true){
		document.write(a-b);
	}
}

function Operaciones2() {
	let numero = 12;
	numero += 5;
	numero--;

	document.writeln(numero);

	let multiplicacion = 10;
	//multiplicacion **= 5;
	document.writeln(multiplicacion);

	let resto = 57409 % 16789;
	document.writeln(resto);

	var o5 = 'Cat' || 'Dog';
	var o6 = false || 'Cat';
	var o7 = 'Cat' || false;

	document.writeln(o5);
	document.writeln(o6);
	document.writeln(o7);
}
