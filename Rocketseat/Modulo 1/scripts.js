const botoes = [
    document.querySelector('div#botoes'),
    document.getElementById('botao1'),
    document.getElementById('botao2'),
    document.getElementById('botao3'),
    document.getElementById('botao4'),
    document.getElementById('botao5')
]

const desafios = document.querySelector('div#desafios')

botoes[1].onclick = function criarDesafio1() {

    let botoes = {
        mostrar: document.createElement('button'),
        limpar: document.createElement('button')
    }

    let textos = {
        mostrar: document.createTextNode('Mostrar Endereço'),
        limpar: document.createTextNode('Limpar Endereço')
    }

    darClasse(botoes.mostrar, 'botao')
    darClasse(botoes.limpar, 'botao')
    
    atribuirFuncao(botoes.mostrar, 'mostrarEndereco()')
    atribuirFuncao(botoes.limpar, 'limparEndereco()')

    atribuirTexto(botoes.mostrar, textos.mostrar)
    atribuirTexto(botoes.limpar, textos.limpar)

    atribuirElemento(botoes.mostrar)
    atribuirElemento(botoes.limpar)

}

botoes[2].onclick = function criarDesafio2() {

    let labels = {
        inicio: document.createElement('label'),
        fim: document.createElement('label')
    }

    let inputs = {
        inicio: document.createElement('input'),
        fim: document.createElement('input')
    }

    let botao = document.createElement('button')

    let textos = {
        inicio: document.createTextNode('Início: '),
        fim: document.createTextNode('Fim: '),
        numeros: document.createTextNode('Números Pares')
    }

    darClasse(labels.inicio, 'descricao')
    darClasse(labels.fim, 'descricao')
    darClasse(inputs.inicio, 'caixa')
    darClasse(inputs.fim, 'caixa')
    darClasse(botao, 'botao')

    darId(inputs.inicio, 'inicio')
    darId(inputs.fim, 'fim')

    atribuirFuncao(botao, 'pares()')

    atribuirTexto(labels.inicio, textos.inicio)
    atribuirTexto(labels.fim, textos.fim)
    atribuirTexto(botao, textos.numeros)

    atribuirElemento(labels.inicio)
    atribuirElemento(inputs.inicio)
    atribuirElemento(labels.fim)
    atribuirElemento(inputs.fim)
    atribuirElemento(botao)

}

botoes[3].onclick = function criarDesafio3() {

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

botoes[4].onclick = function criarDesafio4() {

    desafios.innerHTML = (`
        <label for="anosDeEstudos">Anos de Estudos: </label>
        <input type="number" class="caixa" id="anosDeEstudos">
        <button class="botao" onclick="experiencia()">Experiência</button>
    `)

}

botoes[5].onclick = function criarDesafio5() {

    desafios.innerHTML = (`<button class="botao" onclick="lerHabilidades()">Habilidades dos Usuários</button>`)

}

function darClasse(elemento, classe) {

    elemento.className = classe

}

function darId(elemento, id) {

    elemento.id = id

}

function atribuirFuncao(botao, funcao) {

    botao.setAttribute('onclick', `${funcao}`)

}

function atribuirTexto(elemento, texto) {

    elemento.appendChild(texto)

}

function atribuirElemento(elemento) {

    desafios.appendChild(elemento)

}