alert("Temporizador.");

let horas_digitadas = parseInt(prompt("Digite uma hora: "));
let minutos_digitadas = parseInt(prompt("Digite um minuto: "));
let segundos_digitadas = parseInt(prompt("Digite um segundo: "));
let horas = 0 ;
let minutos = 0 ;
let segundos = 0 ;

for (horas = horas_digitadas ; horas > -1 ; horas --) {
    for (minutos = minutos_digitadas ; minutos > -1 ; minutos --) {
        for (segundos = segundos_digitadas ; segundos > -1 ; segundos --) {
            console.log(`${horas} : ${minutos} : ${segundos}`)
        }
        segundos_digitadas = 59 ;
    }
    minutos_digitadas = 59 ;
}