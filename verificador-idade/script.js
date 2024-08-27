function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bbmas.jpg')
            } else if (idade < 15) {
                img.setAttribute('src', 'crimas.jpeg')
            } else if (idade < 60){
                img.setAttribute('src', 'jovmas.jpg')
            } else {
                img.setAttribute('src', 'idomas.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbfem.jpeg')
            } else if (idade < 15) {
                img.setAttribute('src', 'crifem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'jovfem.jpg')
            } else {
                img.setAttribute('src', 'idofem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}