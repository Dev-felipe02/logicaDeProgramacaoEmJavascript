alert("Converter dolar para real.");

let cotacao = parseFloat(prompt("Digite o valor da cotação dólar: "));
let dolar = parseFloat(prompt("Digite a quantia de dólar para a converção: "));

let real = dolar * cotacao ;

alert("A quantidade de reais convertidos foi: R$"+ real);