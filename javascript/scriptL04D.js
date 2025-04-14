//alert("L04D.");

let graos = 1 ;
let trigos = 0 ;
let soma = 1 ;
let contador = 2 ;

do {
    trigos = graos * 2 ;
    soma = soma + trigos ;
    graos = trigos ;
    contador ++ ;
} while (contador < 65) ;

console.log(soma);