alert("Entre 3 valores. somar os 2 maiores.");

let num01 = parseInt(prompt("Digite um valor: "));
let num02 = parseInt(prompt("Digite um valor: "));
let num03 = parseInt(prompt("Digite um valor: "));
let maior = num01 ;
let meio = num02 ;
let menor = num03 ; 

if (num02 > num01) {
    maior = num02 ;
    meio = num01 ;
}
if (num03 > maior) {
    meio = maior ;
    maior = num03
    menor = num02
}
else if (num03 > meio) {
    meio = num03;
    menor = num02 ; 
}

let soma = maior + meio ;

alert("O valor da soma dos 2 maiores numeros digitados é: "+ soma);