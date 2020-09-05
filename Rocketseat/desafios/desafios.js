var botoes = [
    document.getElementById('botao0'),
    document.getElementById('botao1'),
    document.getElementById('botao2'),
    document.getElementById('botao3'),
    document.getElementById('botao4'),
]

botoes[0].addEventListener('click', criarHTML0)
botoes[1].addEventListener('click', criarHTML1)
botoes[2].addEventListener('click', criarHTML2)
botoes[3].addEventListener('click', criarHTML3)
botoes[4].addEventListener('click', criarHTML4)

var desafios = document.getElementById('desafios')

function criarHTML0() {

    desafios.innerHTML = ('<button class="botao" onclick="mostrarEndereço()">Mostrar Endereço</button>')

}

function criarHTML1() {

    console.log('HTML1')

}

function criarHTML2() {

    console.log('HTML2')

}

function criarHTML3() {

    console.log('HTML3')

}

function criarHTML4() {

    console.log('HTML4')

}