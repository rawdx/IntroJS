function caso1() {
	var a = 5;
	var b = 10;

	if (a == 5) {

		let a = 4;
		var b = 1;

		document.write(a);
		document.write(b);
	}
	document.write(a);
	document.write(b);
}

function caso2() {

	for (let i = 0; i < 10; i++) {
		document.write(i);
	}
	document.write(i);
}

function caso3() {
	var x = 5;
	var y = 0;
	/*
	let (x = x+10, y = 12) {
		document.write(x+y);
	}
	*/
	document.write(x + y);
}

function caso4() {
	let a = 6;

	document.write(a);
	document.write(a);
}
