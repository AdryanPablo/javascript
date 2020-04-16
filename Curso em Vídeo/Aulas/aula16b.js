var n1 = 2, n2 = 20

console.log(`A soma entre ${n1} e ${n2} equivale a ${soma(n1, n2)}.`)

function soma(num1 = 0, num2 = 0){      // Os parâmetros formais já estão pré-definidos caso não sejam enviados parâmetros reais.
    return num1 + num2
}