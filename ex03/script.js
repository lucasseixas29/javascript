function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')   
        var idade = ano - Number(fano.value)   
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) { 
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'homem.jpg')
            } else if ( idade < 45) {
                //Adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) { 
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src',  'mulher.jpg')
            } else if ( idade < 46) {
                //Adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }

        }
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
        }
    

