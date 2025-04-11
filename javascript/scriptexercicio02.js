alert("Contagem regressiva, laço de repetição DO WHILE");

let contador = parseInt(prompt("Digite um numero: "));

do {
    console.log(contador)
    contador = contador - 1 ;
} while (contador > -1) ;