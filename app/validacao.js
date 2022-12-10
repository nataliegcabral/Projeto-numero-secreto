function verificaChute() {
    const numero = +chute

    if (chuteInvalido(numero)) {
        console.log('Valor inválido')
    }

    if (numeroNaoPermitido(numero)) {
        console.log(`O número precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}