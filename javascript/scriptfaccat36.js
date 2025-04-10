alert("Idade homem mais velho com mulher mais nova.");

let men01 = parseInt(prompt("Digite a idade do primeiro homem: "));
let men02 = parseInt(prompt("Digite a idade do segundo homem: "));
let girl01 = parseInt(prompt("Digite a idade da primeira mulher: "));
let girl02 = parseInt(prompt("Digite a idade da segunda mulher: "));

let men_menor ;
let men_maior ;
let girl_menor ;
let girl_maior ;
let soma01 ;
let soma02 ;

if (men01 > men02) {
    men_maior = men01 ;
    men_menor = men02 ;
}
else {
    men_maior = men02 ;
    men_menor = men01 ;
}
if (girl01 > girl02) {
    girl_maior = girl01 ;
    girl_menor = girl02 ;
}
else {
    girl_maior = girl02 ;
    girl_menor = girl01 ;
}

soma01 = men_maior + girl_menor ;
soma02 = men_menor + girl_maior ;

alert("A soma da idade do homem mais velho com a mulher mais nova é: "+ soma01);
alert("A soma da idade do homem mais novo com a mulher mais velha é: "+ soma02);