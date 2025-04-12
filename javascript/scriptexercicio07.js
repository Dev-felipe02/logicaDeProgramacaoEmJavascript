alert("Adivinhe o número");

let senha = parseInt(prompt("Digite a senha correta: "));
let num_aleatorio = Math.floor(Math.random() * 10) + 1 ;

if (senha != num_aleatorio) {
do {
    alert("Senha incorreta!")
    senha = parseInt(prompt("Digite a senha correta: "));
} while (senha != num_aleatorio)
    alert("Senha correta!")
}
else {
    alert("Senha correta!")
}
