function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if(hora >=0 && hora <12){
        //Bom dia!
        img.scr = 'imagens/manha3.png'
        document.body.style.background= '#74f0c7'
    }else if(hora >=12 && hora <=18){
        //Boa tarde!
        img.src = 'imagens/tarde3.png'
        document.body.style.background='#fadf6a'
    } else /*if(hora >=18 && hora < 0)*/{
        //Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#534266'
        
    }
    
    /*else{
        //Boa madrugada!
        img.src = 'imagens/noite3.png'
        document.body.style.background = '#2f164d'*/


    
}