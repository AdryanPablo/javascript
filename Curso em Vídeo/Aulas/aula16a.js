var num = 10
var teste = par_impar(num)

console.log(`O número ${num} é ${teste}.`)
console.log(`O número ${num + 1} é ${par_impar(num + 1)}.`)

function par_impar(num){
    if (num % 2 == 0){
        //var teste = 'Par'
        return 'Par'
    } else{
        //var teste = 'Ímpar'
        return 'Ímpar'
    }
    //return teste
}