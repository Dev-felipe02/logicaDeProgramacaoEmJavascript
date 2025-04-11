alert("Adivinhe o número");

let senha = parseInt(prompt("Digite a senha correta: "));

if (senha != 1234) {
do {
    alert("Senha incorreta!")
    senha = parseInt(prompt("Digite a senha correta: "));
} while (senha != 1234)
    alert("Senha correta!")
}
else {
    alert("Senha correta!")
}