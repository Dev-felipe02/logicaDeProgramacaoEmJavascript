alert("Salario vendedor.");

let salario_puro = parseFloat(prompt("Digite o seu salario fixo mensal: "));
let vendas = parseFloat(prompt("Digite o valor total da suas vendas: "));
let salario_comissao ;
let comissao_extra ;

if (vendas > 1500) {
    salario_comissao = 3 / 100 * 1500 + salario_puro ;
    comissao_extra = 5 / 100 * (vendas - 1500) + salario_comissao ;
    alert("Seu sálario final com a comissão extra é de: R$"+ comissao_extra);
}
else {
    salario_comissao = 3 / 100 * vendas + salario_puro ;
    alert("Seu sálario final é de: R$"+ salario_comissao);
}