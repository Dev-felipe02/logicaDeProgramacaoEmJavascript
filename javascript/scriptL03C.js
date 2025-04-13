alert("L03BC.");

let num = 1 ;
let contador = 1 ;
let soma = 0

while (contador < 501) {
    if (num % 2 === 0) {
        soma = soma + num ;
    }
    contador ++ ;
    num ++ ;
}

alert(`A soma de todos numero pares de 1 a 500 é: ${soma}`);