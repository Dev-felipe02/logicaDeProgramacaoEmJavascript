alert("L03J.");

let num = 50 ;
let soma = 0 ;
let media = 0 ;
let contador = 0 ;

while (num < 71) {
    if (num % 2 === 0) {
        soma = soma + num ;
        contador ++ ;
    }
    num ++ ;
}

media = soma / contador ;

alert(`A soma dos valores pares dos numeros entre 50 a 70 é ${soma}, e a média é ${media}`);