alert("Teste para saber o tipo do triangulo aprensentado.");

let A = parseFloat(prompt("Digite o valor do primeiro lado do triângulo: "));
let B = parseFloat(prompt("Digite o valor do segundo lado do triângulo: "));
let C = parseFloat(prompt("Digite o valor do terceiro lado do triângulo: "));

let tipo ;

if (A < (B + C) && B < (A + C) && C < (A + B)) {
    if (A == B && B == C) {
        tipo = "Triângulo Equilátero" ;
    }
    if (A == B || B == C || A == C) {
        tipo = "Triângulo Isósceles" ;
    }
    else {
        tipo = "Triângulo Escaleno" ;
    }
}
else {
    tipo = "Não é possível formar um triângulo." ;
}

alert("A partir das medidas digitadas o tipo do triângulo é: "+ tipo)