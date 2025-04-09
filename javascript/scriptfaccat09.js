alert("Reajuste salário.");
let salario = parseFloat(prompt("Digite o seu salário atual: "));
let reajuste = parseFloat(prompt("Digite a porcentagem de reajuste: "));
let final = reajuste / 100 * salario + salario ;
alert("O valor final do seu salário é: R$"+ final);