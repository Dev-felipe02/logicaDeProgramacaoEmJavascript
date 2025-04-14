alert("L04B.");

let num = 1 ;
let soma = 0 ;

do {
    if (num % 2 === 0){
        soma = soma + num ;
        console.log(soma);
    }
    num ++ ;
} while (num < 501) ;