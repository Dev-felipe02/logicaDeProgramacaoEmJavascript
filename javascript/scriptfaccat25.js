alert("Saldo positivo ou negativo.");

let conta = parseInt(prompt("Digite o numero da sua conta: "));
let saldo = parseFloat(prompt("Digite o valor atual do seu salto: "))
let debito = parseFloat(prompt("Digite o valor atual do seu débito: "));
let credito = parseFloat(prompt("Digite o valor atual do seu crédito: "));

let saldoaldo_atual = saldo - debito + credito ;

if (saldoaldo_atual > -1) {
    alert("Saldo Positivo");
}
else {
    alert("Saldo Negativo");
}