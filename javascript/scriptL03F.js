alert("L03F.");

let base = parseInt(prompt("Digite um valor para a base: "));
let expoente = parseInt(prompt("Digite um valor para o expoente: "));

let potencia = base ;
let contador = 1 ;

while (contador < expoente) {
    potencia = potencia * base ;
    contador ++ ;
}

alert(`O valor de ${base} a ${expoente}° potencia é: ${potencia}`);