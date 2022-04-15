
function calcular() {
   
    var numero = Number(prompt('Digite um número'))

    var tipo

if( numero % 2==0) {
    tipo ='PAR'
} else { 
    tipo = 'ÍMPAR'

}

var res = document.getElementById('res'
)
    res.innerHTML= `O número ${numero} é ${tipo}`
}