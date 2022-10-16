		<script>
			//Just some examples
			stringAEncriptar = "alura"
			stringAEncriptar = stringAEncriptar.toLowerCase();
			let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

			for (let i = 0; i < matrizCodigo.length; i++) {
				if (stringAEncriptar.includes(matrizCodigo[i][0])) {
					stringAEncriptar = stringAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
				}
			}

			console.log(stringAEncriptar)
		</script>
