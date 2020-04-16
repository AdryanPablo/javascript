var pessoa = { 
    nome: 'José', 
    sexo: 'M', 
    idade: 18,
    peso: 85.4,
    envelhecer (anos = 0) {

        this.idade += anos

    },
    engorgar (quilos = 0) {

        pessoa.peso += quilos

    }
}

console.log(pessoa)
console.log(`\nNome: ${pessoa['nome']}`)
console.log(`Sexo: ${pessoa.sexo}`)
console.log(`Idade: ${pessoa.idade}`)
console.log(`Peso: ${pessoa.peso}`)

pessoa.envelhecer(2)
pessoa.engorgar(5)

console.log('\nTransformação...\n')
console.log(`Idade: ${pessoa.idade}`)
console.log(`Peso: ${pessoa.peso}`)