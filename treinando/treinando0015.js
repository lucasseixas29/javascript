function clicar ()  {

var meses = new Array ('jan','fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'setembro', 'outubro','novembro', 'dezembro') 
var semana = new Array ('dom','seg', 'ter', 'qua', 'qui','sexta', 'sab')
var agora = new Date

var res = document.getElementById('res')
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
var sem = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()

res.innerHTML = `<p>O dia é ${dia}</p>`
res.innerHTML += `<p>O mês é ${mes}</p>`
res.innerHTML += `<p>O ano é ${ano}</p>`
res.innerHTML += `<p>A semana é ${sem}</p>`
res.innerHTML += `<p>A hora é ${hora}</p>`
res.innerHTML += `<p>Os minutos são ${min}</p>`
res.innerHTML += `<p>Os segundos são ${sec}</p>`


}
