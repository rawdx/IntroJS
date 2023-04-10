function calcularValor(){
	console.log(document.getElementsByName('valor')[0].value * 30 / 100)
}

function calcular(form){
	form.resultado.value = eval(form.operacion.value)
}


function calcularPeso(form) {
	let peso = 50 + ((form.altura.value - 150) / 4) * 3 + (form.edad.value - 20) / 4
	
	switch (form.sexo.value) {
		case "Hombre":
			document.getElementById('peso').innerHTML = peso
			break;
		case "Mujer":
			document.getElementById('peso').innerHTML = peso * 0.9
			break;
	}
}