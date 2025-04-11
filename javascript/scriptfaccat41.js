alert("Média de aluno, com conceito de nota.");

let n01 = parseFloat(prompt("Digite a sua nota de primeira avaliação: "));
let n02 = parseFloat(prompt("Digite a sua nota de segunda avaliação: "));
let n03 = parseFloat(prompt("Digite a sua nota de terceira avaliação: "));
let media_exercicios = parseFloat(prompt("Digite a sua nota da média dos exercícios: "));

let media_aproveitamento = (n01 + (n02 * 2) + (n03 * 3) + media_exercicios) / 7 ;
let conceito

if (media_aproveitamento > 8.9) {
    conceito = "A ;"
}
else if (media_aproveitamento > 7.4 && media_aproveitamento < 9) {
    conceito = "B " ;
}
else if (media_aproveitamento > 5.9 && media_aproveitamento < 7.5) {
    conceito = "C" ;
}
else {
    conceito = "D" ;
}

alert(" A nota de aproveitamento do aluno foi de "+ media_aproveitamento +" e o conceito aplicado a nota foi: ("+ conceito + ")");