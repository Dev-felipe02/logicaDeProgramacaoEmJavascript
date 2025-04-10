alert("Hora extra.");

let horas = parseInt(prompt("Digite a quantidade de horas trabalhadas: "));
let valor_hora = parseFloat(prompt("Digite o valor da sua hora trabalhada: "));
let hora_mes = 40 * 4 ;
let salario = hora_mes * valor_hora ;
let extra ;
let salario_extra ;

if (horas > hora_mes) {
    extra = 50 / 100 * ((horas - hora_mes) * valor_hora) + ((horas - hora_mes) * valor_hora);
    salario_extra = salario + extra ;
    alert("O valor final do seu salário com as horas extras é: R$"+ salario_extra);
}
else {
    alert("O valor final do seu salário é: R$"+ salario);
}