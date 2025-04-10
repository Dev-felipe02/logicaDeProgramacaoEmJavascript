alert("Acessar conta.");

let usuario = parseInt(prompt("Digite seu código de usuario: "));
let senha = parseInt(prompt("Digite sua senha: "));

if (usuario != 1234 || senha != 9999) {
    alert("Usuário ou Senha inválido(s)!");
}
else {
    alert("Acesso permitido.");
}