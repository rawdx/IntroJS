function array1() {
	let alumnos = ["Alfonso", "Alberto", "Carlos", "José María"];
	let solucion = alumnos[0].charAt(2);
	let solucionAlt = alumnos[0][2];
	document.write(solucion + "<br>" + solucionAlt);
}

function array2() {
	let lista = [145, "hola"];
	let posicion1 = lista[0][1];
	let posicion2 = lista[1][1];
	
	//No se puede acceder con tipo number a cada una de las posiciones
	document.write(posicion1 +"<br>"+ posicion2 +"<br>" + typeof(posicion1) + "<br>" + typeof(posicion2));
}

function concat1(){
	let texto = "string" + 12;
	document.write(texto)
}

function concat2(){
	let textos = ["CSI1", " curso", " 2022 23."];
	document.write(textos[0] + textos[1] + textos[2]);
}

function concat3(){
	let partes = ["posiciones ", "se cuentan ", "Las ", "array ", "cero.", "a partir ", "del "];
	document.write(partes[2] + partes[0] + partes[partes.length - 1] + partes[3] + partes[1] + partes[5] + partes[6] + partes[4]);
} 