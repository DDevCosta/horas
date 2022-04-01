function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manhã.png'
        document.body.style.background = '#bfae8e'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#8d9fae'
    } else {
        //BOA NOITE
        document.body.style.background = '#443250'
        img.src = 'noite.png'
    }
}
