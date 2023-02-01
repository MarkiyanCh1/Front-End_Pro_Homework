const API_URL = 'http://127.0.0.1:3000';
const userBlock = document.querySelector('.usersBlock');
const form = document.forms.user;
const submitButton = document.getElementById('submit');

const getUsers = () => {
    fetch(`${API_URL}/users`)
        .then((response) => response.json())
        .then((data) => {
            userBlock.innerHTML = '';
            data.forEach(addUserHtml);
        })
        .catch((error) => console.log(error.message));
};


const addUserHtml = ({ id, name, age }) => {
    const div = document.createElement('div');
    div.setAttribute('data-id', id);

    div.insertAdjacentHTML(
        'beforeend',
        `
        <p>User: <span class="user-name">${name}</span></p>
        <p>Age: <span class="user-age">${age}</span></p>
        <button data-action="delete">Delete</button>
        <button data-action="edit">Edit</button>`
    );

    userBlock.append(div);
};

const updateUser = (apiURL, name, age, id) => {
    fetch(`${apiURL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, age, id }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then(() => getUsers())
        .catch((error) => console.log(error.message));
};

const postUser = (apiURL, name, age) => {
    fetch(`${apiURL}/users`, {
        method: 'POST',
        body: JSON.stringify({ name, age }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => addUserHtml(data))
        .catch((erorr) => console.log(erorr.message));
};


getUsers();

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const age = this.age.value;
    const id = this.id.value;

    if (name == false || age == false) {
        alert('Can"t submit empty fields');
        return;
    }

    if (id) {
        updateUser(API_URL, name, age, id);
        const userDom = document.querySelector(`[data-id="${id}"]`);
        userDom
            .querySelectorAll('[data-action]')
            .forEach((item) => (item.disabled = false));
        submitButton.textContent = 'Add';
    } else {
        postUser(API_URL, name, age);
    }

    form.reset();
});

userBlock.addEventListener('click', function (e) {
    if (e.target.getAttribute('data-action') === 'delete') {
        const id = e.target.closest('[data-id]').getAttribute('data-id');

        fetch(`${API_URL}/users/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(() => getUsers())
            .catch((error) => console.log(error.message));
    }

    if (e.target.getAttribute('data-action') === 'edit') {
        form.id.value = e.target.closest('[data-id]').getAttribute('data-id');

        form.name.value = e.target
            .closest('[data-id]')
            .querySelector('.user-name').textContent;

        form.age.value = e.target
            .closest('[data-id]')
            .querySelector('.user-age').textContent;

        e.target.disabled = true;
        e.target
            .closest('[data-id]')
            .querySelector('[data-action="delete"]').disabled = true;

        submitButton.textContent = 'Save';
    }
});
