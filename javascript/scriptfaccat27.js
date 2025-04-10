alert("Positivo, negativo ou zero.");

let num = parseFloat(prompt("Digite um numero: "));

if (num > 0) {
    alert("Numero Positivo.");
}
else if (num == 0) {
    alert("Numero igual a Zero.");
}
else {
    alert("Numero Negativo.");
}