//SLIDERPHOTO

let offset = 0;
const sliderLine = document.querySelector('.slider_delivery');

document.querySelector('.arrow-next').addEventListener('click' , function () {
    offset = offset + 500;
    if (offset > 1000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.arrow-prev').addEventListener('click' , function () {
    offset = offset - 500;
    if (offset < 0) {
        offset = 1000;
    }
    sliderLine.style.left = -offset + 'px'
})