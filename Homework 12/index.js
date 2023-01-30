'use strict';

const todoForm = document.forms.todo;
const list = document.querySelector('.todo-list__list');
const input = document.querySelector('.todo-list__input');
const select = document.querySelector('.todo-list__option');
let itemsArray = [];
let counter = 0;

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (todoForm.querySelector('.error-text')) {
        todoForm.querySelector('.error-text').remove();
    }

    if (!input.value.trim()) {
        errorMessage(input, 'Field should not be empty');
        return;
    }

    const newItem = {
        id: itemsArray.length == 0 ? 0 : itemsArray[itemsArray.length - 1].id + 1,
        name: input.value.trim(),
        isDone: false,
    };

    itemsArray.push(newItem);

    localStorage.setItem('taskData', JSON.stringify(itemsArray));

    const taskItem = document.createElement('div');
    taskItem.classList.add('todo-list__item');
    taskItem.setAttribute('data-id', newItem.id);
    list.append(taskItem);

    const taskLabel = document.createElement('p');
    taskLabel.classList.add('todo-list__label');
    taskLabel.textContent = ++counter + '. ' + input.value.trim();
    taskItem.append(taskLabel);

    const taskEditButton = document.createElement('button');
    taskEditButton.classList.add('todo-list__button');
    taskEditButton.textContent = 'Edit';
    taskItem.append(taskEditButton);

    const taskCheckbox = document.createElement('input');
    taskCheckbox.classList.add('todo-list__checkbox');
    taskCheckbox.setAttribute('type', 'checkbox');
    taskItem.append(taskCheckbox);

    const closeIcon = document.createElement('div');
    closeIcon.classList.add('todo-list__close-icon');
    taskItem.append(closeIcon);

    input.value = '';
});

list.addEventListener('click', function (event) {
    function changeIsDone() {
        const itemId = event.target
            .closest('.todo-list__item')
            .getAttribute('data-id');

        const neededTask = itemsArray.find((item) => item.id == itemId);
        neededTask.isDone = event.target.checked;

        localStorage.setItem('taskData', JSON.stringify(itemsArray));
    }

    if (
        event.target.checked &&
        event.target.classList.contains('todo-list__checkbox')
    ) {
        event.target
            .closest('.todo-list__item')
            .querySelector('.todo-list__label')
            .classList.add('_crossed');

        changeIsDone();
        filterTasks();
    } else if (
        !event.target.checked &&
        event.target.classList.contains('todo-list__checkbox')
    ) {
        event.target
            .closest('.todo-list__item')
            .querySelector('.todo-list__label')
            .classList.remove('_crossed');

        changeIsDone();
        filterTasks();
    }

    if (event.target.classList.contains('todo-list__close-icon')) {
        let sameId = itemsArray.findIndex(function (element) {
            return (
                element.id ==
                event.target.closest('.todo-list__item').getAttribute('data-id')
            );
        });
        itemsArray.splice(sameId, 1);

        localStorage.setItem('taskData', JSON.stringify(itemsArray));

        event.target.closest('.todo-list__item').remove();
    }

    if (
        event.target.classList.contains('todo-list__button') &&
        event.target.classList.contains('_editing')
    ) {
        if (todoForm.querySelector('.error-text')) {
            todoForm.querySelector('.error-text').remove();
        }
        let editInputValue = event.target
            .closest('.todo-list__item')
            .querySelector('input').value;
        if (!editInputValue) {
            alert('Field should not be empty');
            return;
        }
        event.target.classList.remove('_editing');
        event.target.textContent = 'Edit';
        event.target
            .closest('.todo-list__item')
            .querySelector('.todo-list__label').textContent = editInputValue;
        event.target.closest('.todo-list__item').querySelector('input').remove();

        const editInputId = event.target
            .closest('.todo-list__item')
            .getAttribute('data-id');

        const neededObjectId = itemsArray.find((item) => item.id == editInputId);

        neededObjectId.name = editInputValue;

        localStorage.setItem('taskData', JSON.stringify(itemsArray));
    } else if (event.target.classList.contains('todo-list__button')) {

        event.target.textContent = 'Ok';
        event.target.classList.add('_editing');
        const editInput = document.createElement('input');
        editInput.setAttribute('type', 'text');
        event.target
            .closest('.todo-list__item')
            .querySelector('.todo-list__label').textContent = '';
        event.target.closest('.todo-list__item').prepend(editInput);
    }
});

function errorMessage(element, textErrorMessage) {
    let message = document.createElement('p');
    message.classList.add('error-text');
    message.textContent = textErrorMessage;
    element.classList.add('_error');
    element.before(message);
}


todoForm.querySelectorAll('.todo-list__input').forEach(function (item) {
    item.addEventListener('input', function () {
        if (item.classList.contains('_error')) {
            this.classList.remove('_error');
            this.closest('.todo-form').querySelector('.error-text').remove();
        }
    });
});


select.addEventListener('change', filterTasks);

function filterTasks() {
    const domArray = document.querySelectorAll('.todo-list__item');
    domArray.forEach(function (domItem) {
        domItem.classList.remove('_hidden');
    });
    if (select.selectedIndex == 1) {
        const processArray = itemsArray.filter(function (item) {
            return item.isDone == true;
        });
        for (let i = 0; i < processArray.length; i++) {
            for (let j = 0; j < domArray.length; j++) {
                if (processArray[i].id == domArray[j].getAttribute('data-id')) {
                    domArray[j].classList.add('_hidden');
                    break;
                }
            }
        }
    } else if (select.selectedIndex == 2) {
        const doneArray = itemsArray.filter(function (item) {
            return item.isDone == false;
        });
        for (let i = 0; i < doneArray.length; i++) {
            for (let j = 0; j < domArray.length; j++) {
                if (doneArray[i].id == domArray[j].getAttribute('data-id')) {
                    domArray[j].classList.add('_hidden');
                    break;
                }
            }
        }
    }
}


if (!localStorage.getItem('taskData')) {
    console.log('LocalStorage is empty');
} else {
    itemsArray = localStorage.getItem('taskData');
    itemsArray = JSON.parse(itemsArray);

    itemsArray.forEach(function (item) {
        const taskItemLS = document.createElement('div');
        taskItemLS.classList.add('todo-list__item');
        taskItemLS.setAttribute('data-id', item.id);
        list.append(taskItemLS);

        const taskLabelLS = document.createElement('p');
        taskLabelLS.classList.add('todo-list__label');
        taskLabelLS.textContent = ++counter + '. ' + item.name;
        taskItemLS.append(taskLabelLS);

        const taskEditButtonLS = document.createElement('button');
        taskEditButtonLS.classList.add('todo-list__button');
        taskEditButtonLS.textContent = 'Edit';
        taskItemLS.append(taskEditButtonLS);

        const taskCheckboxLS = document.createElement('input');
        taskCheckboxLS.classList.add('todo-list__checkbox');
        taskCheckboxLS.setAttribute('type', 'checkbox');
        if (item.isDone) {
            taskCheckboxLS.setAttribute('checked', true);
        }
        taskItemLS.append(taskCheckboxLS);

        const closeIconLS = document.createElement('div');
        closeIconLS.classList.add('todo-list__close-icon');
        taskItemLS.append(closeIconLS);
    });
}