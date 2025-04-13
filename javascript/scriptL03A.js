alert("L03A.");

let num = parseInt(prompt("Digite um numero: "));

let tabuada = 0 ;
let contador = 1 ;

while (contador < 11) {
    tabuada = num * contador ;
    console.log(`${num} X ${contador} = ${tabuada}`);
    contador ++ ;
}