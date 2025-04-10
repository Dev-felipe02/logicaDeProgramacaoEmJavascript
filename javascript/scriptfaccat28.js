alert("Maior valor, entre 3 valores.");

let num01 = parseInt(prompt("Digite um valor: "));
let num02 = parseInt(prompt("Digite um valor: "));
let num03 = parseInt(prompt("Digite um valor: "));

if (num01 > num02 && num01 > num03) {
    alert("O maior valor entre os 3 digitados é: "+ num01);
}
else if (num02 > num01 && num02 > num03) {
    alert("O maior valor entre os 3 digitados é: "+ num02);
}
else {
    alert("O maior valor entre os 3 digitados é: "+ num03);
}