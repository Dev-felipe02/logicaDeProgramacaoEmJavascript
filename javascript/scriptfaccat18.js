alert("Pode ou não votar.");

let ano = parseInt(prompt("Digite o ano que você nasceu: "));
let anoA = parseInt(prompt("Digite o ano atual: "));

let idade = anoA - ano ;

if (idade > 15) {
    alert("Você tem: "+ idade +" anos, e pode votar este ano.");
}
else {
    alert("Você tem: "+ idade +" anos, e não pode votar este ano.");
}