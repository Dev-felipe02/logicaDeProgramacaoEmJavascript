alert("Revendedora de carros, salário.");

let salario = parseFloat(prompt("Digite o seu salario fixo: "));
let comissao = parseFloat(prompt("Digite o valor da sua comissão por carro vendido: "));
let qvendas = parseInt(prompt("Digite quantos carros você vendeu este mês: "));
let vendastotal = parseFloat(prompt("Digite o valor total da suas vendas no mês: "));

let resultado = salario + (qvendas * comissao) + (5 / 100 * vendastotal);

alert("O salário final do revendedor é: R$"+ resultado)