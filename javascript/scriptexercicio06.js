alert("Média de notas, laço de repetição DO WHILE.");

let notas = parseFloat(prompt("Digite sua nota: "));
let contador = 0;
let soma = 0 ;
let media = 0 ;

if (notas > -1 && notas < 11) {
do {
    contador ++
    soma = soma + notas ;
    notas = parseFloat(prompt("Digite sua nota: "));
} while (notas > -1 && notas < 11)
    alert(contador)
    media = soma / contador ;
    alert("A media das notas digitadas é: "+ media);
}
else {
    alert("A nota digitada é inválida.");
}