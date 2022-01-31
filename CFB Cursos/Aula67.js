var painel
var botaoAvancar
var botaoVoltar
var botaoComeco
var botaoFinal

window.addEventListener('load', iniciar)

function iniciar() {

    painel = document.getElementById('painel')
    botaoAvancar = document.getElementById('botaoAvancar')
    botaoVoltar = document.getElementById('botaoVoltar')
    botaoComeco = document.getElementById('botaoComeco')
    botaoFinal = document.getElementById('botaoFinal')

    painel.innerHTML = `Páginas navegadas: ${history.length}`

    botaoAvancar.addEventListener('click', avancarPagina)
    botaoVoltar.addEventListener('click', voltarPagina)
    botaoComeco.addEventListener('click', irParaComeco)
    botaoFinal.addEventListener('click', irParaFinal)

}

function avancarPagina() {

    history.forward()

}

function voltarPagina() {
    
    history.back()

}

function irParaComeco() {

    let primeiraPagina = -(history.length - 1)

    history.go(primeiraPagina)

}

function irParaFinal() {

    let ultimaPagina = history.length - 1

    history.go(ultimaPagina)

}