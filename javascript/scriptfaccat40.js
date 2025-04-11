alert("Desconto sobre quantidade.");

let nome = prompt("Digite o nome do produto: ");
let comprado = prompt("Digite a quantidade adquirida do "+ nome +": ");
let unitario = prompt("Digite o preço unitário: ");

let total = comprado * unitario ;
let total_desconto ;

if (comprado < 6) {
    total_desconto = total - (0.02 * total) ;
}
else if (comprado > 5 && comprado < 11) {
    total_desconto = total - (0.03 * total) ;
}
else {
    total_desconto = total - (0.05 * total) ;
}

alert("O valor total da compra com os devidos descontos foi de: R$"+ total_desconto)