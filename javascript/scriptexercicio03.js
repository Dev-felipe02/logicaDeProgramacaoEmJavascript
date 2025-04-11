alert("Soma de números positivos, laço de repetição DO WHILE.");

let num = parseInt(prompt("Digite um numero positivo: "));
let soma = 0 ;

if (num > -1) {
do {
    soma = soma + num ;
    num = parseInt(prompt("Digite um numero positivo: "));
} while (num > -1 )
    alert("A soma dos numeros digitados é: "+ soma);
}
else {
    alert("Numero digitado não é positivo.");
}