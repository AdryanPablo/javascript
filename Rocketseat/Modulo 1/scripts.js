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
        mostrar: '',
        limpar: '',

        criarBotao() {

            document.createElement('button')

        },

        darClasse(botao) {

            botao.className = 'botao'

        },

        atribuirFuncao(botao, funcao) {

            botao.setAttribute('onclick', `${funcao}`)

        }
    }

    let textos = {
        mostrar: document.createTextNode('Mostrar Endereço'),
        limpar: document.createTextNode('Limpar Endereço')
    }

    

    botoes.darClasse(botoes.mostrar)
    botoes.darClasse(botoes.limpar)


    botoes.mostrar.setAttribute('onclick', 'mostrarEndereco()')
    botoes.mostrar.appendChild(textos.mostrar)

    botoes.limpar.className = 'botao'
    botoes.limpar.setAttribute('onclick', 'limparEndereco()')
    botoes.limpar.appendChild(textos.limpar)

    desafios.appendChild(botoes.mostrar)
    desafios.appendChild(botoes.limpar)

}

botoes[2].onclick = function criarDesafio2() {

    desafios.innerHTML = (`
        <label for="inicio" class="descricao">Início: </label>
        <input type="number" class="caixa" id="inicio">
        <label for="fim" class="descricao">Fim: </label>
        <input type="number" class="caixa" id="fim">
        <button class="botao" onclick="pares()">Números Pares</button>
    `)

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