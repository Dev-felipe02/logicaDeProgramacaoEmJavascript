alert("L04I.");

let num = parseInt(prompt("Digite um numero: "));
let maior = num ;
let menor = num ;

if (num > -1) {
    do {
        if (num > maior) {
        maior = num ;
        }
        else if (num < menor) {
        menor = num ;
        }
        num = parseInt(prompt("Digite um numero: "));
    } while (num > -1)
    
    alert(`O maior numero digitado foi ${maior}, e o menor foi ${menor}`);
}