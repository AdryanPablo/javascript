var endereco = {
    logradouro: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
}

var enderecoPorExtenso = document.createTextNode(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.logradouro}, com nº ${endereco.numero}.`)

function mostrarEndereco() {

    desafios.appendChild(enderecoPorExtenso)

}

function limparEndereco() {

    desafios.removeChild(enderecoPorExtenso)

}