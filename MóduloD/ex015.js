let botão = document.getElementById('enviar')
botão.addEventListener('click', calcular)
let imagem = document.getElementById('imagem')
let main = document.querySelector('div#main')
let bg_ano = document.querySelector('div#ano_de_nascimento')
let bg_enviar = document.querySelector('input#enviar')
function calcular(){
    //calcular a idade
    let texto = document.getElementById('texto')
    let agora = new Date()
    let ano = agora.getFullYear()
    let nascimento = document.getElementById('inumber')
    let nascimento_valor = nascimento.value
    let idade = Number(ano) - Number(nascimento_valor)
    let masc = document.getElementById('masc')
    let fem = document.getElementById('fem')
    texto.innerText = `Você tem ${idade} anos de idade`
    main.style.height = '500px';
    imagem.style.height = '300px';
    imagem.style.width = '300px';
    bg_ano.style.margin = 'auto'
    bg_enviar.style.margin = 'auto'
    texto.style.margin = 'auto'
    texto.style.fontSize = '1.3em'
    //fim calcular idade
    //Definindo o sexo e faixa de idade
    if (fem.checked == true){
        if (idade > 0 && idade <= 5){
        imagem.style.background = 'url(imagem/Wchild0-5.jpg)'
        }else if (idade > 5 && idade <= 10){
            imagem.style.background = 'url(imagem/Wchild-5-10.jpg)'
        }else if (idade <= 15){
            imagem.style.background = 'url(imagem/Wteen10-15.jpg)'
        }else if (idade <= 25){
            imagem.style.background = 'url(imagem/Wteen-16-25.jpg)'
        }else if (idade <= 35){
            imagem.style.background = 'url(imagem/Wadult-25-35.jpg)'
        }else if (idade > 35 && idade <= 45){
            imagem.style.background = 'url(imagem/Wadult-35-45.jpg)'
        }else{
            imagem.style.background = 'url(imagem/Wold-40-x.jpg)'
        }
    }
    if (masc.checked == true){
        if ( idade > 0 && idade <= 5){
        imagem.style.background = 'url(imagem/Mchild0-5.jpg)'
        }else if (idade <= 10){
            imagem.style.background = 'url(imagem/Mchild5-10.jpg)'
        }else if (idade <= 15){
            imagem.style.background = 'url(imagem/Mchild-10-15.jpg)'
        }else if (idade <= 25){
            imagem.style.background = 'url(imagem/Mteen-16-25.jpg)'
        }else if (idade <= 35){
            imagem.style.background = 'url(imagem/Madult-25-35.jpg)'
        }else if (idade <= 45){
            imagem.style.background = 'url(imagem/Madult-35-45.jpg)'
        }else{
            imagem.style.background = 'url(imagem/Mold-45-x.jpg)'
        }
    }
    if (idade > 102 || idade < 0){
            window.alert('Idade inválida, tente novamente')
            imagem.style.background = ''
            setTimeout(function(){
                window.location.reload()
            }, 0);
    }
    //Fim definição sexo e faixa de idade
}
