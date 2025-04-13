alert("L02A.");

let num01 = parseInt(prompt("Digite um numero: "));
let num02 = parseInt(prompt("Digite um numero: "));

let diferenca = 0 ;

if (num01 > num02) {
    diferenca = num01 - num02 ;
}
else {
    diferenca = num02 - num01 ;
}

alert("A diferença do maior valor pelo menor é: "+ diferenca);
