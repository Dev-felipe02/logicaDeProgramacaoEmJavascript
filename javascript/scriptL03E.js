alert("L03BE.");

let contador = 2 ;
let potencia = 3 ;

console.log("3 a 0° potencia é = 1") ;
console.log("3 a 1° potencia é = 3") ;

while (contador < 16) {
    potencia = 3 * potencia ;
    console.log(`3 a ${contador}° potencia é = ${potencia}`)
    contador ++ ;
}