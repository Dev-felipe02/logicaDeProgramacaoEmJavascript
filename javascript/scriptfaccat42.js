alert("Qualificação para aposentadoria.");

let codigo_pessoal = parseInt(prompt("Digite seu codigo de identificação: "));
let ano_nascimento = parseInt(prompt("Digite o ano que você nasceu: "));
let ano_ingresso = parseInt(prompt("Digite o ano que você ingressou na empresa: "));

let idade = 2025 - ano_nascimento ;
let tempo_trabalho = 2025 - ano_ingresso ;

if (idade > 64) {
    alert("Você possui "+ idade + " anos, e tem " + tempo_trabalho + " anos de trabalho." + " Requer aposentadoria.");
}
else if (tempo_trabalho > 29) {
    alert("Você possui "+ idade + " anos, e tem " + tempo_trabalho + " anos de trabalho." + " Requer aposentadoria.");
}
else if (idade > 59 && tempo_trabalho > 24) {
    alert("Você possui "+ idade + " anos, e tem " + tempo_trabalho + " anos de trabalho." + " Requer aposentadoria.");
}
else {
    alert("Você possui "+ idade + " anos, e tem " + tempo_trabalho + " anos de trabalho." + " Não requer aposentadoria.");
}