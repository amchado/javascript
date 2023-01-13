function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if(idade >=0 && idade <=10){
                img.setAttribute('src', 'img/cm.png')

            }else if(idade < 21){
                img.setAttribute('src', 'img/jm.png')

            }else if(idade < 50){
                img.setAttribute('src', 'img/am.png')

            }else {
                img.setAttribute('src', 'img/im.png' )
            }

        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade <=10){
                img.setAttribute('src', 'img/cf.png' )

            }else if(idade < 21){
                img.setAttribute('src', 'img/jf.png' )

            }else if(idade < 50){
                img.setAttribute('src', 'img/af.png' )

            }else {
                img.setAttribute('src', 'img/if.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}