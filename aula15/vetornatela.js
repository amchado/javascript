let valores = [ 8, 3, 5, 2, 9]


for(let pos = 0 ; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('.')

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //forma mais simples e mais usada


