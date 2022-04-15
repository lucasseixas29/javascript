function calcular() {

    var n1 = Number(prompt('Digite o primeiro número'))
    var n2 = Number(prompt('Digite o segundo número'))
   
    var resultado = document.getElementById('resultado')


    if (n1 > n2) {
        
        resultado.innerHTML= `Analisando os números ${n1} e ${n2} temos que <mark>${n1}</mark> é maior que ${n2}.`
     
    } else if( n1<n2) {
        resultado.innerHTML = `Analisando os números ${n1} e ${n2} temos que o maior valor é ${n2}`
    } else {
        
        resultado.innerHTML= `Analisando os números ${n1} e ${n2} temos que ambos são IGUAIS`
    }






}