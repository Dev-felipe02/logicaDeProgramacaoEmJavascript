alert("L04G.");

let numero = 1 ;
let fatorial = 0 ;
let contador01 = 0 ;

do {
    if (!(numero % 2 === 0)) {
        if (numero == 1) {
            fatorial = numero
        }
        else {
            fatorial = numero
            contador01 = numero ;
            do {
                contador01 -- ;
                fatorial = fatorial * contador01 ;
            } while (contador01 > 1) ;
        }
        console.log(`${numero}! = ${fatorial}`);
    }
    numero ++ ;
} while (numero < 11) ;