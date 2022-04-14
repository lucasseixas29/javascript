

function calcular() {

    var nome = prompt('Nome do Aluno(a)')

    var nota1 = Number(prompt("Digite sua nota 01"))

    var nota2 = Number(prompt("Digite sua nota 02"))
    
    var res = document.getElementById('res')

    var msg = ''

    var media = (nota1 + nota2)/2

    if (media >=6) { 
        msg = 'Meus parabéns.'
    } else {
       msg = 'Estude mais um pouco.'
    }

    res.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`
    res.innerHTML += `<p>A média final de ${nome} é : ${media}</p>`
    res.innerHTML+= `<p style= 'color: red;'>${msg}</p>`
}