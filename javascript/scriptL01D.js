alert("Combustivel gasto em viajem.");

let tempo = parseFloat(prompt("Digite o tempo gasto na viajem: "));
let velocidade = parseFloat(prompt("Digite a velocidade media durante a viajem: "));

let distancia = tempo * velocidade ;
let litros_usados = distancia / 12 ;

alert("A velocidade média durante a viajem foi de: "+ velocidade + "Km, e o tempo gasto foi: "+ tempo + "h, em uma distancia de: "+ distancia + ", no total a quantidade de combustivel gasto foi: "+ litros_usados.toFixed(2) + ".");