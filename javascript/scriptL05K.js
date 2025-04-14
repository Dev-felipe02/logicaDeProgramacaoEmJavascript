alert("L05K.");

let fatorial = 0 ;
let contador01 = 0 ;

for (let numero = 1 ; numero < 11 ; numero ++) {
    if (!(numero % 2 === 0)) {
        if (numero == 1) {
            fatorial = numero
        }
        else {
            fatorial = numero
                for (contador01 = (numero - 1) ; contador01 > 0 ; contador01 --) {
                fatorial = fatorial * contador01 ;
                }
        }
        console.log(`${numero}! = ${fatorial}`);
    }
}