var agora = new Date()
var hora = agora.getHours()

if(hora >= 6 && hora < 12){
    console.log('\nBom dia!')
}
else if(hora >= 12 && hora < 18){
    console.log('\nBoa tarde!')
}
else{
    console.log('\nBoa noite!')
}

console.log('Olá, mundo!\n')