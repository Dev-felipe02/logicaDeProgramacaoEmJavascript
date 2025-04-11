alert("Tabuada de um número");

let num = parseInt(prompt("Digite um numero: "));
let tabuada = 0;
let contador = 1 ;

do {
    tabuada = num * contador ;
    console.log(num+ " X " + contador + " = " + tabuada)
    contador ++ ; 
} while ( contador < 11) ;