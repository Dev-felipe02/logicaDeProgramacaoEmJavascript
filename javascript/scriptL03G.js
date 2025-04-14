alert("L03G.");

let fibonacci = 1 ;
let resultado = 1 ;
let contador = 2 ;

console.log(`${resultado}`);

while (contador < 16) {
    console.log(`${resultado}`);
    resultado = resultado + fibonacci ;
    fibonacci = resultado - fibonacci ;
    contador ++ ;
}