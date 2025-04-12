alert("Senha correta, laço de repetição DO WHILE.");

let senha = parseInt(prompt("Digite a senha correta: "));

if (senha != 4321) {
do {
    alert("Senha incorreta!")
    senha = parseInt(prompt("Digite a senha correta: "));
} while (senha != 4321)
    alert("Senha correta!")
}
else {
    alert("Senha correta!")
}