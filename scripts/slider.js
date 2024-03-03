let sliderImg = document.getElementById('sliderImg')
const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')
let imgIndex = 0

const imgSrc = {
    img00: 'imagens/neymar.webp',
    img01: 'imagens/lebron.webp',
    img02: 'imagens/matue.webp',
    img03: 'imagens/xamuel.webp' 
}

const imgArray = Object.keys(imgSrc)

const imageChange = direction =>{
    if(direction == 'next'){
        imgIndex++
        if(imgIndex > imgArray.length - 1){
            imgIndex = 0
        }
    }
    else if(direction == 'previous'){
        imgIndex--
        if(imgIndex < 0){
            imgIndex = imgArray.length - 1
        }
    }
    else{
        imgIndex++
        if(imgIndex > imgArray.length - 1){
            imgIndex = 0
        }
    }
    sliderImg.src = `${imgSrc[imgArray[imgIndex]]}`
    sliderImg.style.transition = '0.5s ease'
    
}

let sliderTimeInterval = setInterval(() => imageChange('next'), 2000);

function startInterval() {
    clearInterval(sliderTimeInterval); // Limpa qualquer intervalo existente para evitar múltiplas execuções simultâneas
    sliderTimeInterval = setInterval(() => imageChange('next'), 2000); // Inicia um novo intervalo
}

function nextSlide() {
    clearInterval(sliderTimeInterval); // Limpa o intervalo atual
    imageChange('next');
    startInterval(); // Inicia um novo intervalo após a transição do slide
}

function previousSlide() {
    clearInterval(sliderTimeInterval); // Limpa o intervalo atual
    imageChange('previous');
    startInterval(); // Inicia um novo intervalo após a transição do slide
}

previousButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);