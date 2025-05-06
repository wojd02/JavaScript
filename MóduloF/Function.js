function ParImp(n){
    if (n % 2 == 0){
        console.log(`O número ${n} é PAR`)
    }else{
        console.log(`O número ${n} é ÍMPAR`)
    }
}
function Somar(n1 = 0, n2 = 0){
    return n1 + n2
}
ParImp(5)
console.log(Somar(5, 10))
