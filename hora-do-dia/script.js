
function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let agora = new Date()
    let hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'manha.jpg'
        document.body.style.background = '#75cae9'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fimdetarde.JPG'
        document.body.style.background = '#eab167'
    } else {
        img.src = 'noite2.jpg'
        document.body.style.background = '#18218b'
    }
}