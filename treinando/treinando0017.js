function gerar() {
var min = 1
var max = 100
var dif = max - min 
var aleatorio = Math.random()
var num = min + Math.trunc(dif * aleatorio)

var res = document.getElementById("res")
res.innerHTML += `<p>O número gerado aleatório foi: <mark>${num}</mark></p>`

}







function limpar() {
    var res = document.getElementById("res")


res.innerHTML = null
}