alert("L02E.");

let A = parseInt(prompt("Digite o valor de A: "));
let B = parseInt(prompt("Digite o valor de B: "));
let C = parseInt(prompt("Digite o valor de C: "));

let x1 = 0 ;
let x2 = 0 ;
let delta = 0 ;

if (A == 0) {
    alert("Valor de A tem que ser diferente de 0!");
}
else {
    delta = B ** 2 - 4 * A * C ;

    if (Math.sqrt(delta) < 0) {
        alert("A equação não possui raizes reais");
    }
    else {
        x1 = (- (B) + Math.sqrt(delta)) / (2 * A) ;
        x2 = (- (B) - Math.sqrt(delta)) / (2 * A) ;
    }

    alert("O valor da raiz X1 é igual a: "+ x1 + ", e o da raiz X2 é: "+ x2 + ".");
}