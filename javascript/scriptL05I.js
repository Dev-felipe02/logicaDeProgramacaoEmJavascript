alert("L05I.");

let fibonacci = 1 ;
let resultado = 1 ;

console.log(`${resultado}`);

for (let contador = 2 ; contador < 16 ; contador ++) {
    console.log(`${resultado}`);
    resultado = resultado + fibonacci ;
    fibonacci = resultado - fibonacci ;
}
