let lista = []
let n = document.getElementById('numero')
let tradutor = document.getElementById('chamar')
let finalizar = document.getElementById('finalizar')
let seletor = document.getElementById('iselector')
let res = document.getElementById('texto')
tradutor.addEventListener('click', adicionar)
finalizar.addEventListener('click', stop)
function Isnum(n){
    if (n >= 0 && n <= 100 && n.length != 0){
        return true
    } else{
        return false
    }
}
function Inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if(Isnum(n.value) && !Inlist(n.value, lista)){
        //window.alert('Tudo ok')
        lista.push(Number(n.value))
        res.innerHTML = ''
        seletor.innerHTML += `<option>Valor ${Number(n.value)} adicionado a lista</option>`
    }else{
        window.alert('Erro')
    }
    n.value=''
    n.focus()

}
function stop(){
    if (lista.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let menor = menor(lista)
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo temos ${lista.length} valores cadastrados</p><p>O menor valor presente na lista é ${menor}`

    }
}




/*let lis = [7,2,4,0,2,1]
let n = 2
let resp = Inlist(n, lis)
let resp_2 = Isnum(n)
console.log(`In list: ${resp} and Is num: ${resp_2}`)*/