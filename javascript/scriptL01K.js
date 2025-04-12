alert("Converter real para dólar.");

let cotacao = parseFloat(prompt("Digite o valor da cotação dólar: "));
let real = parseFloat(prompt("Digite a quantia de reais para a converção: "));

let dolar = real / cotacao ;

alert("A quantidade de dólares convertidos foi: USR$"+ dolar);