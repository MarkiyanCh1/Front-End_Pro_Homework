// 4.  В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вывести изображение из этой папки полученное случайным образом (Math.random)
// по нажатию на кнопку выводить новую случайную картинку

"use strict";

const Images = document.querySelector(".get-image");

Images.addEventListener("click", function () {
    const i = Math.floor(Math.random() * 9 + 1);
    document.querySelectorAll("img").forEach((img) => img.remove());
    document
        .querySelector("body")
        .insertAdjacentHTML(
            "beforeend",
            `<img src="./images/${i}.jpg" alt="img ${i}" id=img${i}>`
        );
});