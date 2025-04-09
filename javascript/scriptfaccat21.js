alert("Duração partida de Xadrez.");

let inicio = parseInt(prompt("Digite a hora de ínicio da partida: "));
let fim = parseInt(prompt("Digite a hora do fim da partida: "));
let tempo;

if (inicio < fim) {
    tempo = fim - inicio ; 
    alert("O jogo de Xadrez durou: "+ tempo +"h");
}
else if (inicio == fim) {
    tempo = 24 ;
    alert("O jogo de Xadrez durou: "+ tempo +"h");
}
else {
    tempo = 24 - inicio + fim ;
    alert("O jogo de Xadrez durou: "+ tempo +"h");
}