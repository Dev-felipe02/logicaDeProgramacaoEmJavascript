alert("L04F.");

let num = 0 ;
let soma = 0 ;
let media = 0 ;
let contador = 1 ;

num = parseInt(prompt("Digite um numero: "));

if (num > -1) {
    soma = soma + num ;
    
    do {
        num = parseInt(prompt("Digite um numero: "));
        if (num > -1) {
        soma = soma + num ;
        contador ++ ;
        }
    } while (num > -1) ;

    media = soma / contador ;

    alert(`A quantidade de numero armazenados foi ${contador}, e a soma deles foi ${soma}, já a media foi ${media}.`)
}
else {
    alert("Digite um numero positivo.");
}