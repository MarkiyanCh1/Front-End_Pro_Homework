//1.  Создать слайдер
// Он может показывать минимум 10 картинок.
// Слайдер имеет две кнопки: Previous / Next.
// При нажатии на которые он показывает предыдущую / следующую картинку.
// Слайдер имеет нормальный вид и не меняет размер в зависимости от картинки (если только это не анимировано красиво).
// НА крайних позициях своей навигации (первая/последняя картинка) слайдер может дизеблить кнопки соответственно (Previous/Next)
// ИЛИ
// может переходить на другой конец ряда картинок (с первой на последнюю и наоборот) (типа слайдер бесконечный).
// Для работы с картинками в слайдере использовать
// document.createElement
// ИЛИ
// работу с атрибутами тега <img/>
// Задание со *: * реализовать listener для next/prev через делегирование событий с помощью одного addEventListener

"use strict";

const prevButton = document.querySelector(".prev-image");
const nextButton = document.querySelector(".next-image");
const image = document.createElement('img');
image.setAttribute('alt', 'nature');
image.setAttribute('height', '350px');
image.setAttribute('width', '550px');
image.style.border = '5px solid yellow';
image.onerror = function handleError() {
    console.log('Image could not be loaded');
};
function slider(Img) {
    let i = 1;
    nextButton.addEventListener("click", function () {
        if ((i += 1) === Img + 1) {
            i = 1;
        }
        image.setAttribute('src', `./images/${i}.jpg`);
        const parentElement = document.getElementById('content-img');
        const replaceElement = document.getElementById('first_image');
        parentElement.replaceChild(image, replaceElement)
    });

    prevButton.addEventListener("click", function () {
        if ((i -= 1) === 0) {
            i = Img;
        }
        image.src = `./images/${i}.jpg`;
        const parentElement = document.getElementById('content-img');
        const replaceElement = document.getElementById('first_image');
        parentElement.replaceChild(image, replaceElement)

    });
}

slider(10);