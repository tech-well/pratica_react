function ValidaIdade(idade){
    return idade >= 18 
    ? 
    console.log('pode comprar')
    : 
     console.log(' não pode comprar')
} 

ValidaIdade(18)

const age = 15

const message = age >= 18 ? 'você é maior de idade' : 'você é menor de idade'

console.log(message)

function ParImpar(n){
    return n%2===0 ? console.log('é par') : console.log('é impar')

}

ParImpar(3)


function ValidaFidelidade(clienteFidelidade){
    return(
        clienteFidelidade == true 
        ? 
        console.log('cliente com 10% de desconto')
        :
        console.log('cliente com 5% de desconto')
    )
}

ValidaFidelidade(false)
