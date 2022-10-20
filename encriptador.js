// Autor: David C.  | Github: David-Carr-C
// To-do: Bug al Desencriptar y encriptar

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
	document.getElementById("output-texto").focus();

	window.getSelection().removeAllRanges();
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

	window.getSelection().removeAllRanges();
}

document.getElementById("output-texto").addEventListener("focus", () => {
	button = document.getElementById("copiar");
	button.style.display = "inline";
});

document.getElementById("input-texto").addEventListener("focus", () => {
	change = document.getElementById("output-texto");
	change.style.backgroundImage = "url(images/Muñeco.png)";
	change.style.backgroundRepeat = "no-repeat";
	change.style.backgroundPosition = "50% 30%";
	change.style.backgroundSize = "300px";

	rm = document.getElementById("output-texto").value = "";

	button = document.getElementById("copiar");
	button.style.display = "none";

	if (window.matchMedia("(max-width:768px)").matches) {
		change = document.getElementById("output-texto");
		change.style.background = "white";

		document.getElementById("output-texto").value = "";

		button = document.getElementById("copiar");
		button.style.display = "none";

		window.getSelection().removeAllRanges();
	}
})

document.getElementById("output-texto").addEventListener("mouseover", () => {
	if (document.getElementById("output-texto").value.length == 0) {
		document.getElementById("output-texto").value = " ";
		document.getElementById("output-texto").style.background = "white";
	}

	button = document.getElementById("copiar");
	button.style.display = "inline";
})

// More info about mouse pseudoelements: https://www.w3schools.com/jsref/event_onmouseleave.asp

document.getElementById("output-texto").addEventListener("mouseleave", () => {
	if (window.matchMedia("(max-width:768px)").matches && document.getElementById("output-texto").value == " ") {
		change = document.getElementById("output-texto");
		change.style.background = "white";

		document.getElementById("output-texto").value = "";

		button = document.getElementById("copiar");
		button.style.display = "none";

		window.getSelection().removeAllRanges();
	}

	if (document.getElementById("output-texto").value == " ") {
		change = document.getElementById("output-texto");
		change.style.backgroundImage = "url(images/Muñeco.png)";
		change.style.backgroundRepeat = "no-repeat";
		change.style.backgroundPosition = "50% 30%";
		change.style.backgroundSize = "300px";

		document.getElementById("output-texto").value = "";

		button = document.getElementById("copiar");
		button.style.display = "none";

		window.getSelection().removeAllRanges();
	}

})

document.getElementById("output-texto").addEventListener("click", () => {
	if (document.getElementById("output-texto").value.length == 0) {
		document.getElementById("output-texto").value = "";
	}
})

/* @media
width = matchMedia("(max-width:768)");
mediaQ = mql => {
	if (mql.matches)
		document.getElementById("output-texto").style.background = "white";
}

width.addListener(mediaQ);
mediaQ(width);
*/
