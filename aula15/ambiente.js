let num = [ 8, 5 , 3 , 9]
num[3]= 1
num[4] = 2
num.push(7)
num.sort()          //num.sort()


console.log(`Minha variavel é ${num}`)
console.log(`O vetor tem ${num.length} posições`) //num.length

let pos = num.indexOf(4)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor de 5 está na posição ${pos}`)
}
