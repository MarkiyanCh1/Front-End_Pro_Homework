'use strict';

const formContainer = document.querySelector('.form-wrapper');

class BaseInput {
    constructor(tag, name, id, cssClass, label) {
        this.tag = tag;
        this.name = name;
        this.id = id;
        this.cssClass = cssClass;
        this.label = label;
    }
}


class TextInput extends BaseInput {
    constructor(tag, name, id, cssClass, label, type, value) {
        super(tag, name, id, cssClass, label);
        this.type = type;
        this.value = value;
    }
    generateNode() {
        const formItem = document.createElement('div');
        formItem.classList.add('form-item');

        const inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', this.id);
        inputLabel.textContent = this.label;
        inputLabel.classList.add('form-label');
        formItem.prepend(inputLabel);

        const formInput = document.createElement(this.tag);
        formInput.setAttribute('name', this.name);
        formInput.setAttribute('id', this.id);
        formInput.classList.add(this.cssClass);
        formInput.setAttribute('type', this.type);
        formInput.setAttribute('value', this.value);
        formItem.append(formInput);
        return formItem;
    }
}


class RadioCheckInput extends TextInput {
    constructor(tag, name, id, cssClass, label, type, value) {
        super(tag, name, id, cssClass, label, type, value);
    }
    generateNode() {
        const formItem = document.createElement('div');
        formItem.classList.add('form-item');
        formItem.classList.add('inline-item');

        const formInput = document.createElement(this.tag);
        formInput.setAttribute('name', this.name);
        formInput.setAttribute('id', this.id);
        formInput.classList.add(this.cssClass);
        formInput.setAttribute('type', this.type);
        formInput.setAttribute('value', this.value);
        formInput.setAttribute('checked', '');
        formItem.append(formInput);

        const inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', this.id);
        inputLabel.textContent = this.label;
        inputLabel.classList.add('inline-label');
        formItem.append(inputLabel);
        return formItem;
    }
}

class SelectInput extends BaseInput {
    constructor(tag, name, id, cssClass, label, selectOptions) {
        super(tag, name, id, cssClass, label);
        this.selectOptions = selectOptions;
    }
    generateNode() {
        const formItem = document.createElement('div');
        formItem.classList.add('form-item');

        const inputLabel = document.createElement('label');
        inputLabel.setAttribute('for', this.id);
        inputLabel.textContent = this.label;
        inputLabel.classList.add('form-label');
        formItem.prepend(inputLabel);

        const formInput = document.createElement(this.tag);
        formInput.setAttribute('name', this.name);
        formInput.setAttribute('id', this.id);
        formInput.classList.add(this.cssClass);

        this.selectOptions.forEach((option) => {
            const nodeOption = document.createElement('option');
            nodeOption.textContent = option;
            formInput.append(nodeOption);
        });

        formItem.append(formInput);
        return formItem;
    }
}

function createForm(formWrapper, objectsArray, formTitle) {
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.setAttribute('action', '#');
    formWrapper.append(form);

    const title = document.createElement('h2');
    title.textContent = formTitle;
    form.prepend(title);

    objectsArray.forEach((item) => form.append(item.generateNode()));

    const button = document.createElement('button');
    button.classList.add('form-button');
    button.textContent = 'Submit';
    form.append(button);
}

const nameInput = new TextInput('input', 'name', 'nameInput', 'text-input', 'Name', 'text', 'some name');
const surnameInput = new TextInput('input', 'surname', 'surnameInput', 'text-input', 'Surname', 'text', 'some surname');
const officeRadio = new RadioCheckInput('input', 'Side of Power', 'radioFront', 'radio-input', 'Front End', 'radio', 'front');
const remoteRadio = new RadioCheckInput('input', 'Side of Power', 'radioBack', 'radio-input', 'Back End', 'radio', 'back');
const englishCheck = new RadioCheckInput('input', 'isJavascript', 'checkJava', 'check-input', 'Knowledge of Javascript', 'checkbox', 'yes');
const countrySelect = new SelectInput('select', 'country', 'countrySelect', 'select-country', 'Country', [
    'Ukraine',
    'Poland',
    'USA',
]);


const arrayOfInputs = [nameInput, surnameInput, officeRadio, remoteRadio, englishCheck, countrySelect];

createForm(formContainer, arrayOfInputs, 'Form with classes');