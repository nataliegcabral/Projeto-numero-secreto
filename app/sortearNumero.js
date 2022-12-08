const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumero()

function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('O número é ' + numeroSecreto)

const elementoMenor = document.querySelector('#menor-valor')
elementoMenor.innerHTML = menorValor

const elementoMaior = document.querySelector('#maior-valor')
elementoMaior.innerHTML = maiorValor
