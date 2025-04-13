alert("L01CO1.");

let candidato01 = prompt("Digite o nome do primeiro candidato: ");
let candidato02 = prompt("Digite o nome do segundo candidato: ");
let candidato03 = prompt("Digite o nome do terceiro candidato: ");

let validos01 = parseInt(prompt("Digite a quantidade de votos validos apurado para o candidato "+ candidato01 + ": "));
let validos02 = parseInt(prompt("Digite a quantidade de votos validos apurado para o candidato "+ candidato02 + ": "));
let validos03 = parseInt(prompt("Digite a quantidade de votos validos apurado para o candidato "+ candidato03 + ": "));

let brancos = parseInt(prompt("Digite a quantidade de voto brancos apurados: "));
let nulos = parseInt(prompt("Digite a quantidade de voto nulos apurados: "));

let eleitores = validos01 + validos02 + validos03 + nulos + brancos ;
let validos_percentual = (validos01 + validos02 + validos03) / eleitores * 100 ;
let brancos_percentual = brancos / eleitores * 100 ;
let nulos_percentual = nulos / eleitores * 100 ;
let candidato01_percentual = validos01 / eleitores * 100 ;
let candidato02_percentual = validos02 / eleitores * 100 ;
let candidato03_percentual = validos03 / eleitores * 100 ;

alert("O total de eleitores foi de: "+ eleitores);
alert("O percentual de votos nulos foi de: "+ nulos_percentual.toFixed(2) + "%");
alert("O percentual de votos brancos foi de: "+ brancos_percentual.toFixed(2) + "%");
alert("O percentual de votos validos foi de: "+ validos_percentual.toFixed(2) + "%");
alert("O percentual de votos validos para o candidato "+ candidato01 + " foi de: "+ candidato01_percentual.toFixed(2) + "%");
alert("O percentual de votos validos para o candidato "+ candidato02 + " foi de: "+ candidato02_percentual.toFixed(2) + "%");
alert("O percentual de votos validos para o candidato "+ candidato03 + " foi de: "+ candidato03_percentual.toFixed(2) + "%");
