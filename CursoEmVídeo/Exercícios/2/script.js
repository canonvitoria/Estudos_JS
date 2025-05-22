function verificar() { 
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('inmb') 
   var res = document.querySelector('div#res')
   var img = document.getElementById('img')

   if(fano.value.length == 0 || (fano.value) > ano) {
      window.alert('[ERRO!] Verifique os dados e tente novamete!')
   } else {
      var fsex = document.getElementsByName('sexo')
      var idade = ano - Number(fano.value)
      var genero = ''

      if (fsex[0].checked) {
         genero = 'mulher'
         if (idade >= 0 && idade < 10) {
            //criança
            img.src = 'imagens/crianca-menina.png'
       } else if (idade >= 10 && idade < 21) {
            //jovem
            img.src = 'imagens/mulher-jovem.png'
       } else if (idade < 50) {
            //adulto
            img.src = 'imagens/mulher-adulta.png'
       } else {
            //idoso
            img.src = 'imagens/idosa-mulher.png'
       }
      } else if (fsex[1].checked) {
         genero = 'homem'
         if (idade >= 0 && idade < 10) {
            //criança
            img.src = 'imagens/crianca-menino.png'
       } else if (idade >= 10 && idade < 21) {
            //jovem
            img.src = 'imagens/homem-jovem.png'
       } else if (idade < 50) {
            //adulto
            img.src = 'imagens/homem-adulto.png'
       } else {
            //idoso
            img.src = 'imagens/idoso-mulher.png'
       }
      }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
}