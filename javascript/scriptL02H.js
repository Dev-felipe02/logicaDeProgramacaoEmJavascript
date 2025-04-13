alert("L02H.");

let num1 = parseInt(prompt("Digite um numero: "));
let num2 = parseInt(prompt("Digite um numero: "));
let num3 = parseInt(prompt("Digite um numero: "));
let num4 = parseInt(prompt("Digite um numero: "));
let num5 = parseInt(prompt("Digite um numero: "));

let num = [num1, num2, num3, num4, num5];

let maior = Math.max(...num);
let menor = Math.min(...num);

alert(`O maior numero é: ${maior}, e o menor numero é: ${menor}`);