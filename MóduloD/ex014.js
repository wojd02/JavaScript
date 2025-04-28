let agora = new Date()
let hora = agora.getHours()
let texto = document.getElementById('texto')
let imagem = document.getElementById('imagem')
let bg = document.querySelector('body')
let main = document.getElementById('main')
let foot = document.getElementById('foot')
if (hora > 4 && hora < 12){
    texto.innerText = `Agora são ${hora} horas.`
}else if(hora > 12 && hora < 19){
    texto.innerText = `Agora são ${hora} horas`
    texto.style.color = 'white'
    imagem.style.background = 'url(imagem/afternoon.jpg)'
    bg.style.background = '#F28705'
    main.style.background = '#682E20'
} else{
    texto.innerText = `Agora são ${hora} horas`
    texto.style.color = 'white'
    foot.style.color = 'white'
    imagem.style.background = 'url(imagem/night.jpg)'
    bg.style.background = '#024873'
    main.style.background = '#4C6979'
}