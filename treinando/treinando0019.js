var n1 = Number(prompt('Digite o primeiro número'))
var n2 = Number(prompt('Digite o segundo número'))
var op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplciar \n[4] Dividir `))

var res = document.getElementById('res')
res.innerHTML ='<h2>Calculando</h2>'
switch (op) {

    case 1 : res.innerHTML += `<p>${n1} + ${n2} = <mark>${n1+n2}</mark></p>`
    
    break
    
    case 2: res.innerHTML += `<p> ${n1} - ${n2} = <mark>${n1-n2}</mark></p>`

    break

    case 3: res.innerHTML += `<p> ${n1} x ${n2} = <mark>${n1*n2}</mark></p>`

    break

    case 4: res.innerHTML += `<p> ${n1} / ${n2} = <mark>${n1/n2}</mark></p>`

    break

    default: res.innerHTML += `<p> OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`

    break
}