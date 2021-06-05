const cards    = document.querySelectorAll('.card')
const slide    = document.querySelector('img.slideImagem')
const link     = document.querySelector('a.mySlides')
const dots     = document.querySelectorAll('.dot')
const submit   = document.querySelector('#submit')
const menssagem = document.querySelector('#menssagem')
const input     = document.querySelectorAll('input')
  
/*Armazena o local dos banners para serem ultilizados nos slides*/
let banner = [
    {src: 'https://www.imagemhost.com.br/images/2021/06/03/tabela-periodica.png',
     link: 'https://edinelsonslima.github.io/tabela-periodica.github.io/'},

     {src: 'https://www.imagemhost.com.br/images/2021/06/03/nutricao.png',
      link: 'https://edinelsonslima.github.io/Aparecida-Nutricionista.github.io/'},

    {src: 'https://www.imagemhost.com.br/images/2021/06/03/cronometro.png',
     link: 'https://edinelsonslima.github.io/cronometro.github.io/'},

    {src: 'https://www.imagemhost.com.br/images/2021/06/03/relogio-flip.png',
     link: 'https://edinelsonslima.github.io/clock-dark-white.github.io/'},
], i=0

/*Função para trocar de Slide automaticamente*/
addEventListener('onchange', alternarBanners())

setInterval(alternarBanners,3000)
function alternarBanners(){
    slide.src = banner[i].src
    link.href = banner[i].link
    i == (banner.length-1)?i=0:i++
}

/*Funções de seleção pelos dots*/
dots[0].addEventListener('mouseover',()=>{
    slide.src = banner[0].src
    link.href = banner[0].link
})
dots[1].addEventListener('mouseover',()=>{
    slide.src = banner[1].src
    link.href = banner[1].link
})
dots[2].addEventListener('mouseover',()=>{
    slide.src = banner[2].src
    link.href = banner[2].link
})
dots[3].addEventListener('mouseover',()=>{
    slide.src = banner[3].src
    link.href = banner[3].link
})

/*Validação dos campos input da menssagem */
submit.addEventListener('click',(e)=>{
    if(!validaCampos()){
        e.preventDefault()
    }else{
        Alert.render('Mensagem enviada com sucesso!')    
    }
})

function validaCampos(){ 
    if(input[2].value == ''    || 
        input[3].value == ''   ||
        menssagem.value == ''  ||
        menssagem.value == ' ' ){
            if(input[2].value == ''){
                input[2].setAttribute('placeholder', 'PREENCHA COM SEU NOME')
            }
            if(input[3].value == ''){
                input[3].setAttribute('placeholder', 'PREENCHA COM SEU EMAIL')
            }
            if(menssagem.value == ''){
                menssagem.setAttribute('placeholder', 'CAMPO DE MENSAGEM ESTÁ VAZIO')
            }
        return false  
    }
    
    return true
    
}