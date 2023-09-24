function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-crianca-H.png')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-H.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-H.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-H.png')
            }
            document.body.style.background = 'rgb(70, 142, 236'

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-crianca-M.png')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-M.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-M.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-M.png')
            }
            document.body.style.background = 'pink'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)        
    }
}