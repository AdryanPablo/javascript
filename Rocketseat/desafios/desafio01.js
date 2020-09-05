var endereço = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
}

function mostrarEndereço() {

    desafios.innerHTML += `O usuário mora em ${endereço.cidade} / ${endereço.uf}, no bairro ${endereço.bairro}, na rua ${endereço.rua}, com nº ${endereço.numero}.`

}