alert("L05H.");

let base = parseInt(prompt("Digite um valor para a base: "));
let expoente = parseInt(prompt("Digite um valor para o expoente: "));

let potencia = base ;

for (let contador = 1 ; contador < expoente ; contador ++)
    potencia = potencia * base ;

alert(`O valor de ${base} a ${expoente}° potencia é: ${potencia}`);