/*
Crie um site que peça para o usuário digitar alguns números entre 1 e 100 e faça algumas análises com os valores informados:

1) Diga quantos elementos foram adicionados;
2) Mostre o maior valor informado;
3) E o menor;
4) Exiba a soma dos valores;
5) E calcule a média.
*/

let num = document.querySelector("input#número")
let tab = document.querySelector("select#tabela")
let res = document.querySelector("div#resultado")
let lista = []

function isNúmero(n){   // Testa se o número digitado é válido.
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){ // Procura o número digitado no vetor.
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){   // Adiciona o número digitado na tabela, se ele for válido.
    if (isNúmero(num.value) && !inLista(num.value, lista)){
        lista.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    } else{
        alert("Número inválido!")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (lista.length == 0){
        alert("Adicione valores antes de finalizar.")
    } else{
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        
        for(let pos in lista){
            soma += lista[pos]
            if(lista[pos] > maior){
                maior = lista[pos]
            }
            if(lista[pos] < menor){
                menor = lista(pos)
            }
        }
        let média = soma / total

        res.innerHTML += `<p>Ao todo foram adicionados ${total} elementos.</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores digitados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}.</p>`
    }
}  
    