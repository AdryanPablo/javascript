var num = [5, 1, 4] // Cria uma variável composta com 3 elementos

console.log(num)

num[3] = 2          // Cria um novo elemento de índice 3, com o valor 4 dentro dele.

console.log(num)

num.push(3)         //Adiciona um novo elemento ao final do vetor, o elemento tem o valor 5 dentro.

console.log(num)
console.log(`\nO vetor têm ${num.length} elementos.\n`)     // Mostra o tamanho do vetor.

// Obs.: length não é um método é um atributo, portanto não tem parênteses.

for (let cont = 0; cont < num.length; cont++){
    console.log(`Índice[${cont}] = ${num[cont]}`)
}

num.sort()          // Coloca os elementos do vetor em ordem crescente.

console.log('\nElementos em ordem crescente: \n')
for (let cont = 0; cont < num.length; cont++){
    console.log(`Índice[${cont}] = ${num[cont]}`)
}

var pos5 = num.indexOf(5)
var pos6 = num.indexOf(6)

console.log('\nO vetor tem o valor 5?')
if (pos5 != -1){
    console.log(`Sim! E está no índice ${pos5}.`)
} else{
    console.log('Não.')
}

console.log('\nE o valor 6?')
if (pos6 != -1){
    console.log(`Sim! E está no índice ${pos6}.`)
} else{
    console.log('Não.')
}