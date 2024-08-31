function ValidaIdade(idade) {
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

function ParImpar(n) {
    return n % 2 === 0 ? console.log('é par') : console.log('é impar')

}

ParImpar(3)


function ValidaFidelidade(clienteFidelidade) {
    return (
        clienteFidelidade == true
            ?
            console.log('cliente com 10% de desconto')
            :
            console.log('cliente com 5% de desconto')
    )
}

ValidaFidelidade(false)

function Media(n1, n2, n3, n4) {
    let nota = (n1 + n2 + n3 + n4) / 4

    if (nota >= 6) {
        console.log('aprovado')
    } else {
        console.log('reprovado')
    }
    return nota
}


Media(9, 6, 10, 3)

function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return console.log('domingo');

        case 2:
            return console.log('segunda');

        case 3:
            return console.log('terça');

        case 4:
            return console.log('quarta');

        case 5:
            return console.log('quinta');

        case 6:
            return console.log('sexta');

        case 7:
            return console.log('sábado');

        default: return console.log('Dia inválido')
    }
}

diaDaSemana(9)

function mesDoAno(mes) {
    switch (mes) {
        case 1:
            return console.log('Janeiro')

        case 2:
            return console.log('Fevereiro')

        case 3:
            return console.log('Março')

        case 4:
            return console.log('Abril')

        case 5:
            return console.log('Maio')

        case 6:
            return console.log('Junho')

        case 7:
            return console.log('Julho')

        case 8:
            return console.log('Agosto')

        case 9:
            return console.log('Setembro')

        case 10:
            return console.log('Outubro')

        case 11:
            return console.log('Novembro')

        case 12:
            return console.log('Dezembro')

        default: console.log('Mês inválido')
    }

}

mesDoAno(4)

function dev(cargo) {
    switch (cargo) {
        case 'iniciante':
            return console.log('vai estudar')

        case 'intermediario':
            return console.log('vai estudar a documentação')

        case 'avançado':
            return console.log('muda nada continua estudando')

        default: console.log('não é da área')

    }
}

dev('hahahaha')
