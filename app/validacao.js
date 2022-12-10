const elementoDica = document.querySelector('#dica')

function verificaChute() {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'

        return
    }

    if (numeroNaoPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>O número precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.style.background = '#899878'
        document.body.innerHTML = `
        <h3>Você acertou!</h3>
        <h4>O número secreto era ${numeroSecreto}</h4>

        <button id="jogar-novamente" class="btn">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoDica.innerHTML = `
        <div class="numero">O número secreto é menor <i class="material-icons">south</i></div>
        `
    } else {
        elementoDica.innerHTML = `
        <div class="numero">O número secreto é maior <i class="material-icons">north</i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})