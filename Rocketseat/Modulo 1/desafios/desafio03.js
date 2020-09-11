function temHabilidade() {

    let habilidades = [
        document.getElementById('habilidade1').value,
        document.getElementById('habilidade2').value,
        document.getElementById('habilidade3').value
    ]

    let procura = false

    for (let contador = 0; contador < habilidades.length; contador++) {

        if (habilidades[contador] == 'Javascript') {

            procura = true

        }
    }

    desafios.innerHTML += `O usuário `

    if (procura) {

        desafios.innerHTML += `tem `

    } else {

        desafios.innerHTML += `não tem `

    }

    desafios.innerHTML += `a habilidade Javascript.`

}