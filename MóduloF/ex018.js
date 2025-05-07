let lista = []
let n = document.getElementById('numero')
let tradutor = document.getElementById('chamar')
tradutor.addEventListener('click', adicionar)
function Isnum(n) {
    if (n >= 0 && n <= 100){
        return true
    } else{
        return false
    }
}
function Inlist(n, lista){
    if(lista.indexOf(Number(n) != -1)){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if(Isnum(n.value) && Inlist(n.value, lista)){
        window.alert('Tudo ok')
    }else{
        window.alert('Erro')
    }

}



/*let lis = [7,2,4,0,2,1]
let n = 2
let resp = Inlist(n, lis)
let resp_2 = Isnum(n)
console.log(`In list: ${resp} and Is num: ${resp_2}`)*/