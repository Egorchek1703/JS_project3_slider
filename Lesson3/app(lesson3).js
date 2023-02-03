const downBut = document.querySelector('.down-button')
const upBut = document.querySelector('.up-button')

const quantityImages = document.querySelector('.main-slide').querySelectorAll('div').length // Или можно этим 4 div-ам задать общий класс и не обращаться к родительскому .main-slide
//console.log(quantityImages) // КО 4

const sidebar = document.querySelector('.sidebar')
sidebar.style.top = `-${(quantityImages - 1) * 100}vh`

const mainSlide = document.querySelector('.main-slide')

downBut.addEventListener('click', clickDown)
upBut.addEventListener('click', clickUp)

function clickDown () {
   changeSlide('down')
   // console.log(activeSlideIndex)
}
function clickUp () {
   changeSlide('up') 
   // console.log(activeSlideIndex)
}
// Необходима переменная в которой лежит индекс активного слайда
let activeSlideIndex = 0
// Получим высоту container'а для различных расширений, чтобы сделать адаптивным перемещение слайдов
let contHeight = document.querySelector('.container').clientHeight

function changeSlide (direction) {
    if (direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = quantityImages - 1
        }
    }
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex >= quantityImages){
            activeSlideIndex = 0
        }
    }
// Я хотел сделать нижепредставленный механизм, задавая изменения vh, однако нужно понимать, что container в котором лежит слайдер, не всегда может быть равен высоте экрана.
// Поэтому необходимо получить высоту container'а и адаптировать ее под расширение пользователя (строка 26)
    mainSlide.style.transform = `translateY(-${activeSlideIndex * contHeight}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * contHeight}px)`
}
// Добавляем переключение слайдеров нажатием на кнопки клавиатуры

document.addEventListener('keydown', tapOnArrow) // Событие keyDown происходит при нажатии клавиши, а событие keyUp при ее отпускании

function tapOnArrow (event){
    // console.log(event) // КО отобразит буквы на нажатой кнопке или ArrowUp/ArrowDown/ArrowLeft/ArrowRight, поэтому
    if(event.key === 'ArrowUp'){
        changeSlide('up')
    }
    else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
}
// Добавлю запрет на копирование
document.addEventListener('copy', (event)=>{
    alert('You can not copy: ' + event.target.innerText)
})