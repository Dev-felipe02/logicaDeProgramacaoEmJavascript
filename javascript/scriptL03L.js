alert("L03L.");

let num = parseInt(prompt("Digite um numero: "));
let maior = num ;
let menor = num ;

while (num > -1) {
    if (num > maior) {
        maior = num ;
    }
    else if (num < menor) {
        menor = num ;
    }
    num = parseInt(prompt("Digite um numero: "));
}

alert(`O maior numero digitado foi ${maior}, e o menor foi ${menor}`);