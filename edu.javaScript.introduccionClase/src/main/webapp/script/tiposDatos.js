function caso1() {
	let numeroGrande = 4567891324657987654;
	let numeroGrandeCasteado = BigInt(987654321654987654);

	document.write(typeof (numeroGrande));
	document.write(typeof (numeroGrandeCasteado));
}

function caso2() {
	let texto = "Soy un string";

	document.write(typeof (texto));
}

function caso3() {
	let variableVacia;

	document.write(variableVacia);
	document.write(typeof (variableVacia));
}

function caso4() {
	let nulo = null;
	let vacio;
	document.write(nulo);
	document.write(typeof (nulo));
}

function caso5() {
	function coche(marca, modelo, anioFabricacion) {
		this.marca = marca;
		this.modelo = modelo;
		this.anioFabricacion = anioFabricacion;
	}
	var Vehiculo = new coche('Honda', 'Civic', 2010);

	document.write(Vehiculo instanceof coche);
	document.write(Vehiculo instanceof Object);
	document.write(Vehiculo);
	document.write(Vehiculo.marca);
}
