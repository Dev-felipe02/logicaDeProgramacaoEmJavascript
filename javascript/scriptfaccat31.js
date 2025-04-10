alert("É ou não um triangulo.");

let A = parseFloat(prompt("Digite um valor para o primeiro lado: "));
let B = parseFloat(prompt("Digite um valor para o segundo lado: "));
let C = parseFloat(prompt("Digite um valor para o terceiro lado: "));

if (A < (B + C) && B < (A + C) && C < (A + B)) {
    alert("As medidas lidas formam um triangulo.");
}
else {
    alert("As medidas lidas não formam um triangulo.");
}