alert("L02C.");

let nota01 = parseFloat(prompt("Digite a nota da sua primeira prova: "));
let nota02 = parseFloat(prompt("Digite a nota da sua segunda prova: "));
let nota03 = parseFloat(prompt("Digite a nota da sua terceira prova: "));
let nota04 = parseFloat(prompt("Digite a nota da sua quarta prova: "));

let media = (nota01 + nota02 + nota03 + nota04) / 4 ;

if (media > 4) {
    alert("A sua média final foi "+ media + ", você foi aprovado!");
}
else {
    alert("A sua média final foi "+ media + ", você foi reprovado ;-;.");
} 