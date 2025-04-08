alert("Idade em dias")

let diaA = parseInt(prompt("Digite o dia atual: "));
let mesA = parseInt(prompt("Digite o mês atual: "));
let anoA = parseInt(prompt("Digite o ano atual: "));
let dias = parseInt(prompt("Digite o dia que você nasceu: "));
let mes = parseInt(prompt("Digite o mês que você nasceu: "));
let ano = parseInt(prompt("Digite o ano que você nasceu: "));

let calculo = (anoA * 365) - (mesA * 30) - diaA
let idade = calculo - ((ano * 365) - (mes * 30) - dias) ;

alert("A sua idade em dias é: "+ idade);