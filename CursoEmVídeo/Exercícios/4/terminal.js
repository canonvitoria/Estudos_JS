function gerar () {
    var numero = document.getElementById('inum')
    var resposta = document.getElementById('ires')

    if (numero.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!!')
    } else {
        var n = Number(numero.value)
        var c = 1
        resposta.innerHTML = ``
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `resposta${c}`
            resposta.appendChild(item)
            c++
        }
    }
}

