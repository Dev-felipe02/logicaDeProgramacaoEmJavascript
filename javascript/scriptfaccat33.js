alert("3 comparações.");

let num01 = parseFloat(prompt("Digite um numero: "));
let num02 = parseFloat(prompt("Digite um numero: "));

if (num01 == num02){
    alert("Numeros iguais");
}
else if (num01 > num02) {
    alert("Primeiro é maior");
}
else {
    alert("Segundo é maior");
}