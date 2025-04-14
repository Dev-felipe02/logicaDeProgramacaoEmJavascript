alert("L05G.");

let contador = 2 ;
let potencia = 3 ;

console.log("3 a 0° potencia é = 1") ;
console.log("3 a 1° potencia é = 3") ;

for (contador = 2 ; contador < 16 ; contador ++) {
    potencia = 3 * potencia ;
    console.log(`3 a ${contador}° potencia é = ${potencia}`);
}