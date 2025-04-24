let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (0 < hora && hora < 12){
    console.log('Bom dia')
}else if (12 < hora && hora < 18){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}