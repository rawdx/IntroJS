function Conversion1(){
	let texto = "No soy un número";
	let conversion = Number(texto);
	document.write(typeof (conversion) + " " + conversion);
}

function Conversion2() {
	let numero = 8;
	let texto = numero.toString();
	document.write(typeof (texto) + " " + texto);
}

function Conversion3() {
	let a = 1;
	let b = 2;
	let c = 3;
	
	document.write(a.toString() + b.toString() + c.toString() + String(a));
}