//SLIDERVIDEO



function slider() {

    const sliderLine = document.querySelector('.slider_line');
    let offset = 0;

    document.querySelector('.slider_next').addEventListener('click', function () {
        const windowSize = window.innerWidth
        if (windowSize > 750) {
            offset = offset + 700;
            if (offset > 1400) {
                offset = 0;
            } 
        } else if (windowSize < 430) {
            offset = offset + 350;
            if (offset > 700) {
                offset = 0;
            }
        }

        sliderLine.style.left = -offset + 'px'
    })

    document.querySelector('.slider_prev').addEventListener('click', function () {
        const windowSize = window.innerWidth
        if (windowSize > 750) {
            offset = offset - 700;
            if (offset < 0) {
                offset = 1400;
            } 
        } else if (windowSize < 430) {
            offset = offset - 350;
            if (offset < 0) {
                offset = 700;
            }
        } 
        sliderLine.style.left = -offset + 'px'
    })
}

slider();

function secondSlider () {
    const sliderLine = document.querySelector('.delivery_slider-line');
    let offset = 0;

    document.querySelector('.arrow-left').addEventListener('click', function () {
        const windowSize = window.innerWidth
        if (windowSize > 750) {
            offset = offset + 700;
            if (offset > 4200) {
                offset = 0;
            } 
        } else if (windowSize < 440) {
            offset = offset + 350;
            if (offset > 2100) {
                offset = 0;
            }
        }

        sliderLine.style.left = -offset + 'px'
    })

    document.querySelector('.arrow-right').addEventListener('click', function () {
        const windowSize = window.innerWidth
        if (windowSize > 750) {
            offset = offset - 700;
            if (offset < 0) {
                offset = 4200;
            } 
        } else if (windowSize < 440) {
            offset = offset - 350;
            if (offset < 0) {
                offset = 2100;
            }
        } 
        sliderLine.style.left = -offset + 'px'
    })
}

secondSlider();



