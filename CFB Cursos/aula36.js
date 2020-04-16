window.addEventListener('load', ouvirEventos)

var jogadores = []
var jogadorAtual = null

function ouvirEventos () {

    let botãoAddJogador = document.getElementById('botãoAddJogador')

    botãoAddJogador.value = 'Adicionar Jogador'
    botãoAddJogador.addEventListener('click', adicionarJogador)

    console.log(`Último jogador adicionado: ${jogadores[jogadores.length - 1]}`)

    if (jogadores.length > 0) {
        
        for (let contador = 0; contador < jogadores.length; contador ++) {

            let jogador = document.getElementById(`jogador${jogadores.length - 1}`)
            console.log(`Laço de repetição: ${jogador}`)
            jogador.addEventListener('click', function(event){
                selecionarJogador(jogador)
            })
        
        }

    }

}

function adicionarJogador () {

    let tela = document.getElementById('tela')

    jogadores[jogadores.length] = `<div id = 'jogador${jogadores.length}'</div>`

    tela.innerHTML += jogadores[jogadores.length - 1]

    posicionarJogador()

}

function posicionarJogador () {
    
    let limitesDaTela = [740, 540]
    let eixoX = Math.trunc(Math.floor(Math.random() * limitesDaTela[0]) / 10) * 10
    let eixoY = Math.trunc(Math.floor(Math.random() * limitesDaTela[1]) / 10) * 10
    let jogador = document.getElementById(`jogador` + (jogadores.length - 1))

    console.log(`Coordenadas: {${eixoX}, ${eixoY}}`)

    jogador.style.position = 'relative'
    jogador.style.top = eixoY + 'px'
    jogador.style.left = eixoX + 'px'

    ouvirEventos()

}

function selecionarJogador (jogador) {

    console.log('Jogador selecionado.')


    mudarCor(jogador, criarCor())

    jogadorAtual = jogador

    document.addEventListener('keydown', moverJogadorAtual)

}

function mudarCor (jogador, cor) {

    jogador.style.backgroundColor = cor

}

function criarCor () {

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let cor = `rgb(${r}, ${g}, ${b})`
    console.log(cor)

    return cor

}

function moverJogadorAtual () {

    let tecla = event.keyCode
    let eixoX = jogadorAtual.style.left
    let eixoY = jogadorAtual.style.top

    eixoX = parseInt(eixoX.substring(0, eixoX.length - 2))
    eixoY = parseInt(eixoY.substring(0, eixoY.length - 2))

    console.log(`Coordenadas 2: {${eixoX}, ${eixoY}}`)

    if (tecla == 37) {  // Esquerda

        eixoX -= 10
        jogadorAtual.style.left = eixoX + 'px'

    } else if (tecla == 38) {   // Cima

        eixoY -= 10
        jogadorAtual.style.top = eixoY + 'px'

    } else if (tecla == 39) {   // Direita
        
        eixoX += 10
        jogadorAtual.style.left = eixoX + 'px'

    } else if (tecla == 40) {   // Baixo

        eixoY += 10
        jogadorAtual.style.top = eixoY + 'px'

    } else if (tecla == 27) {   // Esc

        console.log('Abandonando jogador.')
        mudarCor(jogadorAtual, '#888')
        jogadorAtual = null
        document.removeEventListener('keydown', moverJogadorAtual)

    }

}