alert("L02F.");

let A = parseInt(prompt("Digite o um numero: "));
let B = parseInt(prompt("Digite o um numero: "));
let C = parseInt(prompt("Digite o um numero: "));

let maior = A ;
let meio = B ; 
let menor = C ;

if (B > maior){
    maior = B ;
    meio = A ;
}

if (C > maior) {
    menor = meio ; 
    meio = maior ; 
    maior = C ;
}
else if (C > meio) {
    menor = meio ;
    meio = C ;
}
alert(menor + " " + meio + " " + maior)