let tradutor = document.getElementById('ouvir')
tradutor.addEventListener('click', tab)

function tab(){
    let numero_tabuada = document.getElementById('num')
    let num_c = Number(numero_tabuada.value)
    let mostrar = document.getElementById('itab')
    mostrar.innerHTML = ''
    if (numero_tabuada.value.length == 0){
        num_c = 1
    }
    for (let c = 1; c<=10; c++){
        let item = document.createElement('option')
        item.text = `${num_c} X ${c} = ${num_c * c}`
        mostrar.appendChild(item)
    }
}
