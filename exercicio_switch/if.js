/*
function converterSegundos(segundos){
let horas= Math.floor(segundos/3600);
let minutos= Math.floor(segundos % 3600) / 60;
let segundo= segundos %60;

return `${horas} hora, ${minutos} minuto, ${segundo} segundo`;
}
console.log(converterSegundos(3665));

function maiorMenor(num1, num2,num3){

    let maior = num1
    let menor = num1

    if(num2 > maior){
          maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }
    
    // Verificar menor
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }
}
    
console.log(maiorMenor(5, 2, 8));

function chequeDescontado(saldoInicial,valorCheque){
if(valorCheque <= saldoInicial){
    let saldoFinal = saldoInicial - valorCheque


console.log("Cheque descontado, saldo, saldo:", saldoFinal)
}else{
    console.log("Saldo Insuficiente")
}
}
console.log(chequeDescontado(500,100))
*/
