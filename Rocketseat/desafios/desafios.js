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

    desafios.innerHTML = (`
        <label for="inicio" class="descricao">Início: </label>
        <input type="number" class="caixa" id="inicio">
        <label for="fim" class="descricao">Fim: </label>
        <input type="number" class="caixa" id="fim">
        <button class="botao" onclick="pares()">Números Pares</button>
    `)

}

function criarHTML2() {

    desafios.innerHTML = (`
        <label for="habilidade1">1ª Habilidade: </label>
        <input type="text" class="caixa" id="habilidade1">
        <label for="habilidade2">2ª Habilidade: </label>
        <input type="text" class="caixa" id="habilidade2">
        <label for="habilidade3">3ª Habilidade: </label>
        <input type="text" class="caixa" id="habilidade3">
        <button class="botao" onclick="temHabilidade()">Tem Habilidade?</button>
    `)

}

function criarHTML3() {

    desafios.innerHTML = (`
        <label for="anosDeEstudos">Anos de Estudos: </label>
        <input type="number" class="caixa" id="anosDeEstudos">
        <button class="botao" onclick="experiencia()">Experiência</button>
    `)

}

function criarHTML4() {

    desafios.innerHTML = (`<button class="botao" onclick="lerHabilidades()">Habilidades dos Usuários</button>`)

}