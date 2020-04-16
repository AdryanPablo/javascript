function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 4
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 6 && hora < 12){
        img.src = '_imagens/dia.png'
    }else if(hora >= 12 && hora < 18){
        img.src = '_imagens/tarde.png'
    }else{
        img.src = '_imagens/noite.png'
    }
}
