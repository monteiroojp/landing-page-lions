let sliderImg = document.getElementById('sliderImg')
const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')

const imgSrc = {
    img00: 'imagens/neymar.webp',
    img01: 'imagens/lebron.webp',
    img02: 'imagens/matue.webp',
    img03: 'imagens/xamuel.webp' 
}

const imgArray = Object.keys(imgSrc)
console.log(imgArray)