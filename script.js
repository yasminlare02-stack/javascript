let pontos = Number(prompt("Quantos pontos?") )
let anosDeCasa = 1
let resultado

if (pontos >= 0 && pontos <= 99) {
     resultado = "Bronze"
} else if (pontos <=499) {
    resultado = "Prata"
}
else if (pontos <= 999) {
    resultado = "Ouro"
} else if (anosDeCasa >= 1) {
    resultado = "Diamante"
}

alert(`A classificação é ${resultado}`)