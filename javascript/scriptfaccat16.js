alert("Maças com desconto acima de uma duzia.");

let macas = parseInt(prompt("Digite a quantidade de mãças compradas: "));
let preco

if (macas < 12) {
    preco = 1.30 * macas ;
}
else {
    preco = macas ; 
}

alert("O valor da compra das mãças foi de: R$"+ preco)