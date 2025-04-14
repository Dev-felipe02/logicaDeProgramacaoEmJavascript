alert("L05B.");

let num = parseInt(prompt("Digite um numero: "));
let tabuada = 0 ;

for (let contador = 1 ; contador < 11 ; contador ++) {
    tabuada = num * contador ;
    console.log(`${num} X ${contador} = ${tabuada}`);
}