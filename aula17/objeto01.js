let amigo = {nome: 'Arthur', sexo: 'M', peso: '89.1',
 emagrecer(p=0){
    console.log('emagreceu')
    this.peso -= p 
 }
}

amigo.emagrecer(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)