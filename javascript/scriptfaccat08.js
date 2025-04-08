alert("Percentual eleição");

let brancos = parseInt(prompt("Digite a quantida de votos brancos: "));
let nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let validos = parseInt(prompt("Digite a quantidade de votos validos: "));

let total = brancos + nulos + validos ;
let porcentagemB = brancos / total * 100 ;
let porcentagemN = nulos / total * 100 ; 
let porcentagemV = validos / total * 100 ; 

alert("A porcentagem de votos brancos foi de: "+ porcentagemB.toFixed(2) +"%");
alert("A porcentagem de votos nulos foi de: "+ porcentagemN.toFixed(2) +"%");
alert("A porcentagem de votos validos foi de: "+ porcentagemV.toFixed(2) +"%");