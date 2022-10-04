function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    //fano = formulario ano
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[Erro] Digite um valor correto')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino-bebe.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'menino-jovem.png')
            } else if (idade < 40) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else if (idade < 60){
                //Middle-Age
                img.setAttribute('src', 'middle-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina-bebe.png')
            } else if ( idade < 30) {
                //Jovem
                img.setAttribute('src','menina-jovem.png')
            } else if (idade < 40) {
                //Adulta
                img.setAttribute('src', 'mulher-adulta.png')
            } else if (idade < 60) {
                //Middle-age
                img.setAttribute('src', 'middle-mulher.png')
            } else {
                //Idosa
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    
        //res.innerHTML = `Sua idade é ${idade}` // usar para testar o calculo e depois tirar

    }

    //res.innerHTML = `A idade é ${idade}`
}
