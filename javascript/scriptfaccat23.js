alert("Peso ideal.");

let nome = prompt("Digite seu nome: ");
let sexo = prompt("Digite seu sexo: ");
let altura = parseFloat(prompt("Digite a sua altura: "));
let peso_ideal

if (sexo == "M" || sexo == "m") {
    peso_ideal = (72.7 * altura) - 58 ;
    alert(nome +" seu peso ideal é: "+ peso_ideal);
}
else if ( sexo = "F" || sexo == "f") {
    peso_ideal = (62.1 * altura) - 44.7 ;
    alert(nome +" seu peso ideal é: "+ peso_ideal);
}
else {
    alert(nome +" Sexo não identificado.");
}