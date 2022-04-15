var res = document.getElementById('res')
var computador = 0
var jogador = 0

function tentar() {
    var min = 1
    var max = 100
    var dif = max - min
    var aleatorio = Math.random()
    computador = min + Math.trunc(dif*aleatorio)
}

function jogar () {

    jogador =  Number(prompt(`Qual é o seu palpite?`))

    if(jogador < computador) {
        res.innerHTML+= `<p>Você falouu ${jogador}. Meu número é MAIOR.</p>`
    } else if( jogador > computador) {

        res.innerHTML+=`<p> Você falou ${jogador}. Meu número é MENOR</p>`
    } else if (jogador == computador) {
        res.innerHTML+= `<p>PARABÉNS, você acertou! Eu tinha sorteado o valor ${computador}</p>`
        document.getElementById('botao').style.visibility ='hidden'
    }
}
