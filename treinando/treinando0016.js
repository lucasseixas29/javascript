function iniciar() {
var agora = new Date
var ano = agora.getFullYear()
var nasc =Number(prompt('Qual o ano que você nasceu?'))
var idade = ano - nasc
var res = document.getElementById('res')

res.innerHTML = `Quem nasceu em ${nasc} vai completar ${idade} anos em ${ano}`


}