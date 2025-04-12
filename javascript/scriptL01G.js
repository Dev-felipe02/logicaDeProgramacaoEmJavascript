alert("Adição de multiplicação em 4 valores.");

let A = parseInt(prompt("Digite o valor para A: "));
let B = parseInt(prompt("Digite o valor para B: "));
let C = parseInt(prompt("Digite o valor para C: "));
let D = parseInt(prompt("Digite o valor para D: "));

let soma = [(A + B), (A + C), (A + D), (B + C), (B + D), (C + D)];
let mult = [(A * B), (A * C), (A * D), (B * C), (B * D), (C * D)];

alert("A soma de A com os outros valores é: "+ soma[0] + " " + soma[1] + " " + soma[2] + ", \njá as de B é: " + soma[0] + " " + soma[3] + " " + soma[4] + ",\n os de C é: "+ + soma[1] + " " + soma[3] + " " + soma[5] + ",\n e os de D: "+ soma[2] + " " + soma[4] + " " + soma[5]);

alert("A multiplicação de A com os outros valores é: "+ mult[0] + " " + mult[1] + " " + mult[2] + ",\n já as de B é: " + mult[0] + " " + mult[3] + " " + mult[4] + ",\n os de C é: "+ + mult[1] + " " + mult[3] + " " + mult[5] + ",\n e os de D: "+ mult[2] + " " + mult[4] + " " + mult[5]);