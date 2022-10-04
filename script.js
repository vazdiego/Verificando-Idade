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
                img.setAttribute('src', 'img/man/baby.png')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'img/man/teen.png')
            } else if (idade < 40) {
                //Adulto
                img.setAttribute('src', 'img/man/adult.png')
            } else if (idade < 60){
                //Middle-Age
                img.setAttribute('src', 'img/man/middle.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/man/old.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/woman/baby.png')
            } else if ( idade < 30) {
                //Jovem
                img.setAttribute('src','img//woman/teen.png')
            } else if (idade < 40) {
                //Adulta
                img.setAttribute('src', 'img/woman/adult.png')
            } else if (idade < 60) {
                //Middle-age
                img.setAttribute('src', 'img/woman/middle.png')
            } else {
                //Idosa
                img.setAttribute('src', 'img/woman/old.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    
        //res.innerHTML = `Sua idade é ${idade}` // usar para testar o calculo e depois tirar

    }

    //res.innerHTML = `A idade é ${idade}`
}
