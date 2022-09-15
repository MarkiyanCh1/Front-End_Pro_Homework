
"use strict";

const form = document.forms.Form;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let error = formValidation();
    if (error === 0) {
        showSentMessage(form, 'Form sent successfully');
        form.reset();
    }
});

function formValidation() {
    let error = 0;
    const requiredFields = document.querySelectorAll('.form_input');
    for (let i = 0; i < requiredFields.length; i++) {
        const input = requiredFields[i];
        deleteSentMessage(input);
        removeError(input);
        if (input.getAttribute('name') === 'name' || input.getAttribute('name') === 'surname') {
            if (!input.value.match(/^[A-Z]/)) {
                showError(input,'Please enter your name or surname from Capital letter!');
                error++;
            }
        }
        if (input.getAttribute('name') === 'number') {
            if (!input.value.match(/^\+380\d{9}$/)) {
                showError(input, 'Please enter your phone in format: +380ХХХХХХХХХ');
                error++;
            }
        }
        if (input.getAttribute('name') === 'email') {
            if (
                !input.value.match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
            ) {
                showError(input, 'Please enter valid email');
                error++;
            }
        }
        if (input.getAttribute('name') === 'card') {
            if (!input.value.match(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/)) {
                showError(input, 'Please enter valid card number');
                error++;
            }
        }
    }
    return error;
}

function showError(element, message) {
    const errorText = document.createElement('p');
    errorText.classList.add('_errorText');
    errorText.textContent = message;
    element.classList.add('_error');
    element.after(errorText);
}

function removeError(element) {
    if (element.closest('.form_item').querySelector('._errorText')) {
        element.classList.remove('_error');
        element.closest('.form_item').querySelector('._errorText').remove();
    }
}

function showSentMessage(element, message) {
    const successText = document.createElement('p');
    successText.textContent = message;
    successText.classList.add('_successText');
    element.after(successText);
}

function deleteSentMessage(element) {
    element.addEventListener('focus', function () {
        if (
            element.closest('.form_wrapper').querySelector('._successText')
        ) {
            element
                .closest('.form_wrapper').querySelector('._successText').remove();
        }
    });
}
