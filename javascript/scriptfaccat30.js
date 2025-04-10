alert("Entre 3 valores. e escrevelos em ordem crescente.");

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
    menor = meio ;
    meio = maior ;
    maior = num03 ;
}
else if (num03 > meio) {
    meio = num03 ; 
    menor = num01 ; 
}

alert("A ordem crescente dos numeros digitados é: "+ menor +" "+ meio +" "+ maior);