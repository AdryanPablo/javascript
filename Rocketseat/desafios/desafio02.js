function pares() {

    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value

    desafios.innerHTML += `Os números pares entre ${inicio} e ${fim} são: `

    for (let contador = inicio; contador <= fim; contador++) {

        if (contador % 2 == 0) {

            desafios.innerHTML += `${contador} `

        }
    }
}