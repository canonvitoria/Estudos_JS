function carregar() {
    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#7a2e14f1'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#4e5156'}
}
