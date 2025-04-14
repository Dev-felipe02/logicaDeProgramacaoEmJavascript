alert("L04E.");

let num = 0 ;
let soma = 0 ;
let contador01 = 1 ;
let contador02 = 0 ;

do {
    num = parseInt(prompt("Digite um numero: "));
    if (num == 1) {
        soma ++ ;
    }
    else {
        contador02 = num
        do {
            contador02 = contador02 - 1 ;
            num = num * contador02 ;
        } while (contador02 > 1) ;
        soma = soma + num ;
    }

        contador01 ++ ;
} while (contador01 < 16) ;

alert(soma);