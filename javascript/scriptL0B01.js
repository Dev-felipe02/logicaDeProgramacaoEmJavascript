alert("L01B01.");

let salario = parseFloat(prompt("Digite sua salario mensal: "));
let reajuste = parseFloat(prompt("Digite o percentual de reajuste: "));

let salario_final = salario + (reajuste / 100 * salario);

alert("O seu salario atual passou a ser: R$"+ salario_final);