var botaoHome
var botaoSobre
var conteudo

window.addEventListener('load', () => {

    botaoHome = document.getElementById('botaoHome')
    botaoSobre = document.getElementById('botaoSobre')
    conteudo = document.getElementById('conteudo')

    redirecionar('Aula69c')

    botaoHome.addEventListener('click', () => redirecionar('Aula69c'))
    botaoSobre.addEventListener('click', () => redirecionar('Aula69d'))

})

function redirecionar(pagina) {

    conteudo.setAttribute('src', `./${pagina}.html`)

}