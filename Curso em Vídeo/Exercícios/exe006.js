function calcular(){
    var num = window.document.getElementById("número")
    var tab = window.document.getElementById("seltab")
    
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    } else{
        num = Number(num.value)
        tab.innerHTML = ''

        for (var cont = 1; cont <= 10; cont++){
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
        }
    }    
}