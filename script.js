
const tela = document.getElementById("tela");

function clicouDigito(caractere) {
	tela.value += caractere;
}

function excluirUltimoDigito() {
	tela.value = tela.value.substring(0, tela.value.length-1);
}

function limparTela() {
	tela.value = "";
}

function calcular() {
	try {
		tela.value = eval(tela.value);
	} catch (error) {
		tela.value = "Erro";
	}
}


