alert("L04H.");

let confirmacao = prompt("Você deseja calcular a area de sua residencia?: ");

let nome ;
let largura = 0 ;
let comprimento = 0 ;
let area = 0 ;
let area_total = 0 ;

if (confirmacao == "SIM" || confirmacao == "Sim" || confirmacao == "sim" || confirmacao == "S" || confirmacao == "s") {
    do {
        nome = prompt("Digite o nome do cômodo: ");
        largura = parseFloat(prompt(`Digite a largura do(a) ${nome}: `));
        comprimento = parseFloat(prompt(`Digite o comprimento do(a) ${nome}: `));

        area = largura * comprimento ;
        area_total = area_total + area ;

        alert(`A area do ${nome} é: ${area}`);

        confirmacao = prompt("Você deseja calcular a area de um novo cômodo?: ");

        if (confirmacao == "NÃO" || confirmacao == "Não" || confirmacao == "não" || confirmacao == "nao" || confirmacao == "NAO" || confirmacao == "Nao" || confirmacao == "N" || confirmacao == "n") {
            alert(`A area total da residencia é ${area_total}`);
        }
    } while (confirmacao == "SIM" || confirmacao == "Sim" || confirmacao == "sim" || confirmacao == "S" || confirmacao == "s")
}