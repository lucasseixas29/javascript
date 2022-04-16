function contar() {

var res = document.getElementById('res')
var cont = 1
    while( cont<=10) {
        res.innerHTML+= `${cont} &#x1F449;`
        cont ++
    }

}