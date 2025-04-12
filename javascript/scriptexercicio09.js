alert("Fatorial de um número");

let num = parseInt(prompt("Digite um numero: "));
let fatorial = num ;
let contador = 0 ;
contador = num ;

do {
    contador = contador - 1 ;
    num = num * contador ;
} while (contador > 1);

alert("O fatorial de "+ fatorial + " é: " + num);