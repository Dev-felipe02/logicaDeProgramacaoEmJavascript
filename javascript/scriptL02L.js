alert("L02L.");

let nome = prompt("Digite seu nome: ");
let sexo = prompt("Digite seu sexo: ");

if (sexo == "MASCULINO" || sexo == "Masculino" || sexo == "masculino" || sexo == "M" || sexo == "m") {
    alert(`Seja bem-vindo Ilmo Sr.${nome}.`);
}
else if (sexo == "FEMININO" || sexo == "Feminino" || sexo == "feminino" || sexo == "F" || sexo == "f") {
    alert(`Seja bem-vinda Ilma Sra.${nome}.`);
}