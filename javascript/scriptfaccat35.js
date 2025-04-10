alert("Desconto em combustivou.");

let litros = parseFloat(prompt("Digite a quantidade de combustivou abastecido: "));
let combustivou = (prompt("Digite qual foi o combustivel abastecido: "));
let preco ;

if (litros > 20 && combustivou == "A") {
    preco = (2.90 - 0.05 * 2.90) * litros ;
}
else if (litros < 21 && combustivou == "A") {
    preco = (2.90 - 0.03 * 2.90) * litros ;
}
if (litros > 20 && combustivou == "G") {
    preco = (3.30 - 0.06 * 3.30) * litros ;
}
else if (litros < 21 && combustivou == "G") {
    preco = (3.30 - 0.04 * 3.30) * litros ;
}

alert("O valor total do combustivel ficou em: R$"+ preco.toFixed(2))