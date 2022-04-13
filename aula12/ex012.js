var agora = new Date()

var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if( hora >= 5 && hora<12) {
    console.log("bom dia")
} else if( hora <= 18 && hora >=12)  {
    console.log("Boa tarde!")
} else if(hora <5) {
    console.log("Boa madrugada")
} else{
    console.log("boa noite")
}