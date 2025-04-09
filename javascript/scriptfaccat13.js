alert("Média ponderada aluno.");

let n01 = parseFloat(prompt("Digite a primeira nota do aluno: "));
let n02 = parseFloat(prompt("Digite a segunda nota do aluno: "));
let n03 = parseFloat(prompt("Digite a terceira nota do aluno: "));

let nota = (n01 * 2 + n02 * 3 + n03 * 5) / 10 ;

alert("O nota final do aluno é: "+ nota);