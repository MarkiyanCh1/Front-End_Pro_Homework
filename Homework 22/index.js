'use strict';

const form = document.forms.form;
const idInput = form.input;
const container = document.querySelector('.container');
const error_class = '_error';
const content_class = 'content';

function renderPost(domContainer, json) {
    domContainer.insertAdjacentHTML(
        'beforeend',
        `
      <div class=${content_class}>
        <h2 class="post-title">${json.title}</h2>
        <p class="post">${json.body}</p>
        <h3 class="comments-title">Comments:</h3>
      </div>`
    );
}

function renderComments(containerWithPost, json) {
    json.forEach((item) => {
        containerWithPost.insertAdjacentHTML(
            'beforeend',
            `
        <p class="user-email">${item.email} <span>wrote:</span></p>
        <p>${item.body}</p>`
        );
    });
}

function removeContent(contentClass) {
    const content = document.querySelectorAll(`.${contentClass}`);
    content.forEach((item) => item.remove());
}

function addError(element, errorMessage) {
    const message = document.createElement('p');
    message.textContent = errorMessage;
    message.classList.add(error_class);
    element.after(message);
}

function removeError(errorClass) {
    const errors = document.querySelectorAll(`.${errorClass}`);
    errors.forEach((item) => item.remove());
}

form.addEventListener('submit', (element) => {
    element.preventDefault();
    removeError(error_class);
    getPostComments();
});

async function getPostComments() {
    if (idInput.value <= 0 || idInput.value > 100) {
        addError(idInput, 'ID must be from 1 to 99');
        return;
    }
    removeContent(content_class);
    try {
        const URL = `https://jsonplaceholder.typicode.com/posts/${idInput.value}`;
        const responsePost = await fetch(URL);
        const dataPost = await responsePost.json();
        renderPost(container, dataPost);

        const responseComments = await fetch(`${URL}/comments`);
        const dataComments = await responseComments.json();
        renderComments(document.querySelector(`.${content_class}`), dataComments);
    } catch (error) {
        console.log(error);
    }
}

