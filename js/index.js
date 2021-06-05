const cards = document.querySelectorAll('.card')
const slide = document.querySelector('img.slideImagem')
const link = document.querySelector('a.mySlides')
const dots =document.querySelectorAll('.dot')

/*Animação do Scroll da pagina*/
window.addEventListener('scroll',animeScroll)

function animeScroll(){
    let janelaTopo = window.pageYOffset + ((window.pageYOffset*3)/3)
    cards.forEach((card)=>{
        if(janelaTopo > card.offsetTop){
            card.classList.add('anime')
        }
        else{
            card.classList.remove('anime')
        }
    })
}

    
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