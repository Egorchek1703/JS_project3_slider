const downBut = document.querySelector('.down-button')
const upBut = document.querySelector('.up-button')

const mainSlide = document.querySelector('.main-slide')
const countMainSlide = mainSlide.querySelectorAll('div').length

const sidebar = document.querySelector('.sidebar')

sidebar.style.top = `-${(countMainSlide - 1)*100}vh`

downBut.addEventListener('click', downClick)
upBut.addEventListener('click', upClick)

function downClick(){
    changeSlide('down')
}
function upClick(){
    changeSlide('up')
}

let activeSlideIndex = 0

let personHeight = document.querySelector('.container').clientHeight

function changeSlide (direction){
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex >= countMainSlide){
            activeSlideIndex = 0
        }
    }
    else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = countMainSlide - 1
        }
    }
    mainSlide.style.transform = `translateY(-${personHeight * activeSlideIndex}px)`
    sidebar.style.transform = `translateY(${personHeight * activeSlideIndex}px)`
}

