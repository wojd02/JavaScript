let MyVet = [5,4,6,2]
/*MyVet[4] = 9 or*/ MyVet.push(9)
/*console.log(`Meu vetor é ${MyVet}`)
console.log(`Meu vetor tem ${MyVet.length} posições`)
console.log(`O número ${MyVet[0]} ocupa a posição 0 no index`)
console.log(`Meu vetor em ordem fica ${MyVet.sort()}`)*/
/*for(let c = 0; c<= MyVet.length; c++){
    console.log(MyVet[c])
}*/
for(let c in MyVet){
    console.log(MyVet[c])
}