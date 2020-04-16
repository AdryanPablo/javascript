var idade = 17

console.log(`\nVocê tem ${idade} anos.`)

/*
if(idade < 16){
    console.log('Não vota.\n')
}
else{
    if(idade >= 16 && idade < 18){
        console.log('Voto facultativo.\n')
    }
    else{
        console.log('Voto obrigatório.\n')
    }
}
*/

if(idade < 16){                         // No Brasil, menores de 16 anos não votam.
    console.log('Você não vota.\n')
}
else if(idade < 18 || idade > 65){      // Quem tem entre 16 e 18 ou tem mais de 65 anos vota se quiser.
    console.log('Voto opcional.\n')
}
else{                                   // Quem tem entre 18 e 65 é obrigado a votar.
    console.log('Voto obrigatório.\n')
}