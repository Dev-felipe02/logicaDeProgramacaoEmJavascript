alert("Média aluno, aprovado ou não.");

let av1 = parseFloat(prompt("Digite a nota da primeira aviliação do aluno: "));
let av2 = parseFloat(prompt("Digite a nota da segunda aviliação do aluno: "));

let media = (av1 + av2) / 2 ;

if (media > 5) {
    alert("O aluno tem a média: "+ media +", e foi aprovado.");
}
else {
    alert("O aluno tem a média: "+ media +", e foi reprovado.");
}