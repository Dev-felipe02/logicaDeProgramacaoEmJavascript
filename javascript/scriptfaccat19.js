alert("Maior valor.");

let num01 = parseFloat(prompt("Digite um numero: "));
let num02 = parseFloat(prompt("Digite um segundo numero: "));

if (num01 > num02) {
    let maior = num01 ;
    alert("O maior numero é: "+ maior);
}
else {
    let maior = num02 ;
    alert("O maior numero é: "+ maior);
}