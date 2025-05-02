let enviar = document.getElementById('enviar')
enviar.addEventListener('click', sequencia)
function sequencia(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let texto = document.getElementById('texto')
    
    
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
        
    if (p<=0){
        window.alert('Passo inválido, considerando passo: 1')
        p = 1
    }
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            window.alert('Parametros incompletos, tente novamente!')
        }else{
            if(i < f){
                let c = i
                texto.style.textAlign = 'justify'
                texto.innerHTML = 'Contando:<br>'
                for(i; c <= f; c += p){
                    texto.innerHTML += `${c} ➡️`
                }
            } else{
                let c = i
                texto.style.textAlign = 'justify'
                texto.innerHTML = 'Contando:<br>'
                for(i; c >= f; c -= p){
                    texto.innerHTML += `${c} ➡️`
                }
            }
            texto.innerHTML += `🏁`
    }
}