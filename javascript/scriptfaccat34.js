alert("Valor de 'Z'.");

let X = parseInt(prompt("Digite um numero: "));
let Y = parseInt(prompt("Digite um numero: "));

let Z = X * Y + 5 ;
let resposta

if (Z < 1) {
    resposta = "A" ;
}
else if (Z < 101) {
    resposta = "B" ;
}
else {
    resposta = "C" ;
}

alert("O valor de "+ Z +" é: "+ resposta)