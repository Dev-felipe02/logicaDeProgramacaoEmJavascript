alert("Partida de futebol.");

let time01 = prompt("Digite o nome do time mandante: ");
let time02 = prompt("Digite o nome do time visitante: ");
let gols01 = parseInt(prompt("Digite a quantidade de gols marcada pelo "+ time01 +": "));
let gols02 = parseInt(prompt("Digite a quantidade de gols marcada pelo "+ time02 +": "));

if ( gols01 > gols02) {
    alert("O time vencedor foi o: "+ time01 +"!");
}
else if (gols02 > gols01) {
    alert("O time vencedor foi o: "+ time02 +"!");
}
else {
    alert("A partida terminou em empate!");
}