alert("L04J.");

let dividendo01 = parseInt(prompt("Digite o dividendo: "));
let divisor = parseInt(prompt("Digite o divisor: "));
let contador = 0 ;

let dividendo02 = dividendo01

do {
    if (dividendo02 >= divisor) {
        dividendo02 = dividendo02 - divisor ;
        contador ++ ;
    }
} while (dividendo02 >= divisor)

alert(`O calculo de divisão ${dividendo01} / ${divisor} é = ${contador}`);