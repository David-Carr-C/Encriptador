function btnEncriptar() {
	input = document.getElementById("input-texto");
	input = String(input.value);

	input = input.toLowerCase();
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	for (let i = 0; i < matrizCodigo.length; ++i) {
		if (input.includes(matrizCodigo[i][0])) {
			input = input.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}

	output = document.getElementById("output-texto");
	output.value = input;

	document.getElementById("output-texto").style.background = "white";
}

function btnDesencriptar() {
	output = document.getElementById("output-texto");
	output = String(output.value);

	output = output.toLowerCase();
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	for (let i = 0; i < matrizCodigo.length; ++i) {
		if (output.includes(matrizCodigo[i][0])) {
			output = output.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}

	input = document.getElementById("input-texto");
	input.value = output;
	document.getElementById("output-texto").style.background = "white";
}

function copiar() {
	output = document.getElementById("output-texto");
	output = String(output.value);

	foc = document.getElementById("output-texto");
	foc.focus();

	document.execCommand("selectAll");
	document.execCommand("copy");
	document.execCommand("delete")
}

document.getElementById("output-texto").addEventListener("focus", () => {
	change = document.getElementById("output-texto");
	change.style.backgroundImage = "url(images/Muñeco.png)";
	change.style.backgroundRepeat = "no-repeat";
	change.style.backgroundPosition = "50% 30%";
	change.style.backgroundSize = "300px";
});
