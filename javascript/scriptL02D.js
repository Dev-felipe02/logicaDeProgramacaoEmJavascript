alert("L02D.");

let nota01 = parseFloat(prompt("Digite a nota da sua primeira prova: "));
let nota02 = parseFloat(prompt("Digite a nota da sua segunda prova: "));
let nota03 = parseFloat(prompt("Digite a nota da sua terceira prova: "));
let nota04 = parseFloat(prompt("Digite a nota da sua quarta prova: "));

let media01 = (nota01 + nota02 + nota03 + nota04) / 4 ;
let media02 = 0 ;
let exame ;

if (media01 > 6) {
    alert("A sua média final foi "+ media01 + ", você foi aprovado!");
}
else {
    alert("Sua média final foi "+ media01 + ", você precisa fazer o exame para a aprovação.");
    exame = parseFloat(prompt("Digite o valor da sua nota no exame: "));
    media02 = (nota01 + nota02 + nota03 + nota04 + exame) / 5 ;

    if (media02 > 4) {
        alert("A sua média final foi "+ media02 + ", você foi aprovado!");
    }
    else {
        alert("A sua média final foi "+ media02 + ", você foi reprovado ;-;.")
    }
}