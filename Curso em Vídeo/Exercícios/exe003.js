function funcionar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nasc = window.document.getElementById("ano_nasc")
    var resultado = window.document.getElementById("resultado")

    if (ano_nasc.value.length == 0 || ano_nasc.value > ano || ano_nasc.value < ano - 116){
        alert('ERRO! Confira os dados, pora favor!')
    }
    else{
        var sexo = window.document.getElementsByName("radio_sexo")
        var idade = ano - Number(ano_nasc.value)

        if (sexo[0].checked){
            var sexo = 'Homem'

            if (idade >= 0 && idade < 12){
                var status = 'Criança'
            } else if (idade < 21){
                var status = 'Jovem'
            } else if (idade < 50){
                var status = 'Adulto'
            } else{
                var status = 'Idoso'
            }
        }
        else{
            var sexo = 'Mulher'

            if (idade >= 0 && idade < 12){
                var status = 'Criança'
            } else if (idade < 21){
                var status = 'Jovem'
            } else if (idade < 50){
                var status = 'Adulta'
            } else{
                var status = 'Idosa'
            }
        }

        resultado.innerHTML = `<p>Detectamos ${sexo} com ${idade} anos, ou seja, ${status}.</p>`
    }
}