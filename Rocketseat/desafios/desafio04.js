function experiencia() {

    let anosDeEstudos = document.getElementById('anosDeEstudos').value
    let experiencia

    console.log(anosDeEstudos)

    if (anosDeEstudos == 0 || anosDeEstudos == 1) {

        experiencia = 'iniciante'

    } else if (anosDeEstudos > 1 && anosDeEstudos <= 3) {

        experiencia = 'Intermediário'

    } else if (anosDeEstudos > 3 && anosDeEstudos <= 6) {

        experiencia = 'AVANÇADO'

    } else if (anosDeEstudos >= 7) {

        experiencia = 'JEDI MESTER!!!'

    }

    desafios.innerHTML += `O usuário é ${experiencia}.`

}