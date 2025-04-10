/*Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
compra'.*/

alert("Armazenamento em estoque.");

let estoque_atual = parseInt(prompt("Digite a quantidade atual em estoque: "));
let estoque_minimo = parseInt(prompt("Digite a quantidade minima em estoque: "));
let estoque_máximo = parseInt(prompt("Digite a quantidade máxima em estoque: "));

let media = (estoque_máximo + estoque_minimo) / 2

if (estoque_atual >= media) {
    alert("'Não efetuar compra");
}
else {
    alert("Efetuar compra");
}