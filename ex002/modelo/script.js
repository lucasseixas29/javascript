function carregar() {

var msg = document.getElementById("msg")
var img = document.getElementById('img')
var data = new Date()/var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas. `
    if(hora >= 0 && hora < 12) {
    // bom dia!
    img.src = 'manha.jpg'
    document.body.style.background = '#c3b24a'
    } else if(hora >= 12 && hora <18) {
    //boa tarde!
    img.src = 'tarde.jpg'
    document.body.style.background = '#ffca3a'
    } else {
    //boa noite!
    img.src = 'noite.jpg'
    document.body.style.background= '#4e3d61'
    }

} 