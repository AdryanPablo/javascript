var agora = new Date()
var diaSem = agora.getDay()

/*

0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado

*/

switch(diaSem){
    case 0:
        console.log('\nHoje é domingo.')
        break
    case 1:
        console.log('\nHoje é segunda-feira.')
        break
    case 2:
        console.log('\nHoje é terça-feira.')
        break
    case 3:
        console.log('\nHoje é quarta-feira.')
        break
    case 4:
        console.log('\nHoje é quinta-feira.')
        break
    case 5:
        console.log('\nHoje é sexta-feira.')
        break
    case 6:
        console.log('\nHoje é sábado.')
        break
}