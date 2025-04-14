alert("L03I.");

let num = 0 ;
let soma = 0 ;
let media = 0 ;
let contador = 1 ;

while (contador < 11) {
num = parseInt(prompt("Digite um numero: "));
soma = soma + num ;
contador ++ ;
}

media = soma / 10 ;

alert(`A soma dos valores digitados é ${soma}, e média é ${media}`)