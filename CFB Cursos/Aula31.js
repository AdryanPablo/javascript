var número = 1
let letra = 'a'

console.log('\n=== Início ===')
console.log('\n' + número)
console.log(letra)

if (true) {

    var número = 2
    let letra = 'b'

    console.log('\n=== If ===')
    console.log('\n' + número)
    console.log(letra)

}

console.log('\n=== Saiu do If ===')
console.log('\n' + número)
console.log(letra)

while (true) {

    var número = 3
    let letra = 'c'

    console.log('\n=== While ===')
    console.log('\n' + número)
    console.log(letra)

    break

}

console.log('\n=== Saiu do While ===')
console.log('\n' + número)
console.log(letra)

function escopo() {

    var número = 4
    let letra = 'd'

    console.log('\n=== Function ===')
    console.log('\n' + número)
    console.log(letra)

}
escopo()

console.log('\n=== Saiu da Function ===')
console.log('\n' + número)
console.log(letra + '\n')