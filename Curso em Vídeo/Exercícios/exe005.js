function acionar(){
    var início = Number(window.document.getElementById("início").value)
    var fim = Number(window.document.getElementById("fim").value)
    var passo = Number(window.document.getElementById("passo").value)

    var resultado = window.document.getElementById("resultado")
    resultado.innerHTML = '<p>'

    if (passo <= 0){
        alert('ERRO! Confira os dados!')
    } else{
        if (início <= fim){
            // Contagem progressiva
            for(var cont = início; cont <= fim; cont += passo){
                resultado.innerHTML += `${cont} \u{261E}`
            }
        } else{
            // Contagem regressiva
            for(var cont = início; cont >= fim; cont -= passo){
                resultado.innerHTML += `${cont} \u{261E}`
            }
        }
        resultado.innerHTML += `\u{1F3F4}</p>`      // Comando usando tanto no 'if' quanto no 'else'...
    }
}