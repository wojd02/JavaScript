var area = window.document.getElementById('bloco')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)
function clicar(){
    area.innerText = 'clicar!'
    area.style.background = 'darkorange'
    area.style.color = 'cyan'
    area.style.textDecoration = 'none'
    area.style.fontSize = '2em'
    area.style.border = 'none'
}
function entrar(){
    area.style.background = 'white'
    area.style.color = 'black'
    area.innerText = 'entrar'
    area.style.textDecoration = 'underline'
    area.style.fontSize = '1.3em'
    area.style.border = '1px solid black'
}
function sair(){
    area.style.background = 'black'
    area.style.color = 'white'
    area.innerText = 'sair'
    area.style.textDecoration = 'none'
    area.style.fontSize = '1.3em'
    area.style.border = 'none'
}