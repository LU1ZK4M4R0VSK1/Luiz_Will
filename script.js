function lerDados() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    alert("Dados faltantes\nNome: " + nome + "\nEmail: " + email);
}

function verificaNumero() {
    var numero = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    var resultado = "Você digitou o número: " + numero + "\n";

    if (numero % 2 === 0) {
        resultado += "O número é par.\n";
    } else {
        resultado += "O número é ímpar.\n";
    }

    if (numero % 5 === 0) {
        resultado += "O número é divisível por 5.";
    } else {
        resultado += "O número não é divisível por 5.";
    }

    alert(resultado);
}
