alert("Horfruit.");

let fruta = (prompt("Digite qual foi a fruta comprada: "));
let kg = parseInt(prompt("Digite a quantidade de " + fruta + " em Kg, comprados: "));
let preco ;

if (kg > 5 && fruta == "Maça") {
    preco = 2.20 * kg ;
}
else if (kg < 6 && fruta == "Maça") {
    preco = 2.50 * kg ;
}
if (kg > 5 && fruta == "Morango") {
    preco = 1.50 * kg ;
}
else if (kg < 6 && fruta == "Morango") {
    preco = 1.80 * kg ;
}
if (preco > 24 || kg > 8) {
    preco = preco - (0,1 * preco) ;
}

alert("O valor total da compra das frutas foi de: R$"+ preco.toFixed(2));