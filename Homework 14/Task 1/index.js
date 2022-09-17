'use strict';

const images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
    './images/10.jpg',
];

const buttonContainer = document.querySelector('.slider_button-wrapper');
const progressBar = document.querySelector('.slider_progress');
let number = 0;

for (let i = 0; i < images.length; i++) {
    const progressDot = document.createElement('span');
    progressDot.setAttribute('data-id', [i]);
    progressBar.append(progressDot);
}
const progressArray = document.querySelectorAll('.slider_progress span');
progressArray[0].classList.add('_active');

function changeProgressbar() {
    progressArray.forEach(function (item) {
        item.classList.remove('_active');
    });
    progressArray[number].classList.add('_active');
}

buttonContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('slider_prev-button')) {
        this.closest('.slider_wrapper')
            .querySelector('.slider_img')
            .setAttribute('src', images[--number]);
        changeProgressbar();
    }
    if (event.target.classList.contains('slider_next-button')) {
        this.closest('.slider_wrapper')
            .querySelector('.slider_img')
            .setAttribute('src', images[++number]);
        changeProgressbar();
    }
    if (event.target.getAttribute('data-id')) {
        number = event.target.getAttribute('data-id');
        this.closest('.slider_wrapper')
            .querySelector('.slider_img')
            .setAttribute('src', images[number]);
        changeProgressbar();
    }

    this.closest('.slider_wrapper').querySelector(
        '.slider_prev-button'
    ).disabled = number < 1;
    this.closest('.slider_wrapper').querySelector(
        '.slider_next-button'
    ).disabled = number > images.length - 2;
    clearInterval(timer1);
});

const showImage = document.querySelector('.slider_img');
const prevButton = document.querySelector('.slider_prev-button');
const nextButton = document.querySelector('.slider_next-button');

const autoScroll = () => {
    showImage.setAttribute('src', images[++number]);
    changeProgressbar();
    prevButton.disabled = number < 1;
    if (number === images.length - 1) {
        clearInterval(timer1);
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
};

const timer1 = setInterval(autoScroll, 1500);
