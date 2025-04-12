alert("Prestação em atraso.");

let valor = parseFloat(prompt("Digite o valor da prestação: "));
let taxa = parseFloat(prompt("Digite a porcentagem da taxa: "));
let tempo = parseFloat(prompt("Digite o tempo de atraso: "));

let prestacao = valor + (valor * taxa / 100) * tempo ;

alert("O valor final da prestação em atraso ficou em: R$"+ prestacao);