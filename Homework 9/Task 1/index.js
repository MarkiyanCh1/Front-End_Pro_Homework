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

const buttonContainer = document.querySelector('.slider__button-container');
let number = 0;
buttonContainer
    .closest('.slider__wrapper')
    .querySelector('.slider__progress-text').innerHTML = `Фото ${number + 1} из ${
    images.length
}`;

buttonContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('slider__prev-button')) {
        this.closest('.slider__wrapper')
            .querySelector('.slider__image')
            .setAttribute('src', images[--number]);
    }
    if (event.target.classList.contains('slider__next-button')) {
        this.closest('.slider__wrapper')
            .querySelector('.slider__image')
            .setAttribute('src', images[++number]);
    }

    let lockedButton = () => {
        this.closest('.slider__wrapper').querySelector(
            '.slider__prev-button'
        ).disabled = number < 1;
        this.closest('.slider__wrapper').querySelector(
            '.slider__next-button'
        ).disabled = number == images.length - 1;
    };
    lockedButton();
    buttonContainer
        .closest('.slider__wrapper')
        .querySelector('.slider__progress-text').innerHTML = `Photo ${
        number + 1
    } of ${images.length}`;
});