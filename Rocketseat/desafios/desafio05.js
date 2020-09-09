var usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
]

function lerHabilidades() {

    for (let contador = 0; contador < usuarios.length; contador++) {

        desafios.innerHTML += `<br>O usuário ${usuarios[contador].nome} possui as habilidades: `
    
        for (let habilidades = 0; habilidades < usuarios[contador].habilidades.length; habilidades++) {
    
            desafios.innerHTML += `${usuarios[contador].habilidades[habilidades]} `
    
        }
    }
}

