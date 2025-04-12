alert("Quadrado da diferença entre A e B.");

let A = parseInt(prompt("Digite um valor para A: "));
let B = parseInt(prompt("Digite um valor para B: "));

let quadrado = 0

if (A > B) {
    quadrado = (A - B) ** 2 ;
}
else {
    quadrado = (B - A) ** 2 ;
}

alert("O resultado do quadrado da diferença de A para B é: "+ quadrado);