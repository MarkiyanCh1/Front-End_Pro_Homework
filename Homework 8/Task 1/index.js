// 1. Есть блок с текстом на странице и кнопку.
// При нажатии на кнопку текст изменяет цвет.
// При повторном нажатии – возвращается предыдущий цвет

"use strict";

const Text = document.querySelector(".text");
const Button = document.querySelector(".button");

Button.addEventListener("click", function () {
    Text.classList.toggle("text-color");
});
