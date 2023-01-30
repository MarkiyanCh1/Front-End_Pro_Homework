'use strict';

const userForm = document.forms.userForm;
const carForm = document.forms.carForm;
const buyList = document.querySelector('.prototypes__buy-list');
const userButton = document.querySelector('[name="userButton"]');
const clearLSButton = document.querySelector('._clearButton');
let usersArray = [];
let carsArray = [];


function BasicMethods() {
  this.UserInfo = function () {
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('prototypes__info');
    const userText = document.createElement('p');
    infoBlock.setAttribute('data-id', usersArray.length);
    userText.textContent = `Buyer: ${this.name} ${this.surname}, country: ${this.area}, phone number: ${this.phone}.`;
    const carContainer = document.createElement('div');
    carContainer.classList.add('prototypes__car-container');
    buyList.append(infoBlock);
    infoBlock.append(userText);
    infoBlock.append(carContainer);
  };
  this.CarInfo = function () {
    const carText = document.createElement('p');
    carText.textContent = `Car brand: ${this.label}, year: ${this.year}, price: ${this.price}$`;
    const infoBlock = document
      .querySelector(`[data-id="${usersArray.length}"]`)
      .querySelector('.prototypes__car-container');
    infoBlock.append(carText);
  };
}
const prototypeMethods = new BasicMethods(); // get prototype for objects user and car

const carInputs = document.querySelectorAll(
  '[name = "carLabel"], [name="carYear"], [name="carPrice"], [name="carButton"]'
);

const userInputs = document.querySelectorAll(
  '[name = "userName"], [name="userSurname"], [name="userCountry"], [name="userPhone"], [name="userButton"]'
);

userForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let error = 0;
  const userDataFields = document.querySelectorAll('._userData');
  for (let i = 0; i < userDataFields.length; i++) {
    const userInput = userDataFields[i];
    removeError(userInput);
    if (
        userInput.getAttribute('name') === 'userName' ||
        userInput.getAttribute('name') === 'userSurname'
    ) {
      if (!userInput.value) {
        addError(userInput, 'Field can not be empty');
        error++;
      }
    }
    if (userInput.getAttribute('name') === 'userPhone') {
      if (!userInput.value.match(/^380\d{9}$/)) {
        addError(userInput, 'Phone number should be: "380ХХХХХХХХХ');
        error++;
      }
    }
  }
  if (error === 0) {
    console.log('Submit');
  } else {
    return;
  }

  const user = {
    name: '',
    surname: '',
    area: '',
    phone: '',
    cars: [],
    id: '',

    set firstName(newName) {
      this.name = newName;
    },
    set lastName(newSurname) {
      this.surname = newSurname;
    },
    set country(newArea) {
      this.area = newArea;
    },
    set phoneNumber(newPhone) {
      this.phone = newPhone;
    },
    set userId(newId) {
      this.id = newId;
    },
  };

  user.firstName = document.querySelector('[name = "userName"]').value;
  user.lastName = document.querySelector('[name = "userSurname"]').value;
  user.country = document.querySelector('[name = "userCountry"]').value;
  user.phoneNumber = document.querySelector('[name = "userPhone"]').value;

  usersArray.push(user);
  user.userId = usersArray.length;
  localStorage.setItem('usersData', JSON.stringify(usersArray));

  Object.setPrototypeOf(user, prototypeMethods);
  user.UserInfo();
  userForm.reset();


  carInputs.forEach((item) => (item.disabled = false));
  userInputs.forEach((item) => (item.disabled = true));
  userButton.classList.add('_active');
});

carForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let error = 0;
  const carReqFields = document.querySelectorAll('._carReq');
  for (let i = 0; i < carReqFields.length; i++) {
    const carInput = carReqFields[i];
    removeError(carInput);
    if (carInput.getAttribute('name') === 'carPrice') {
      if (!carInput.value.match(/^\d{4}/)) {
        addError(carInput, 'Price should be more then 1000$');
        error++;
      }
    }
  }
  if (error === 0) {
    console.log('Submit');
  } else {
    return
  }

  const car = {
    label: '',
    year: '',
    price: '',
    id: '',
    set carLabel(newLabel) {
      this.label = newLabel;
    },
    set carYear(newCarYear) {
      this.year = newCarYear;
    },
    set carPrice(newCarPrice) {
      this.price = newCarPrice;
    },
    set carId(newCarId) {
      this.id = newCarId;
    },
  };

  car.carLabel = document.querySelector('[name = "carLabel"]').value;
  car.carYear = document.querySelector('[name = "carYear"]').value;
  car.carPrice = document.querySelector('[name = "carPrice"]').value;
  car.carId = usersArray.length;

  carsArray.push(car);
  localStorage.setItem('carsData', JSON.stringify(carsArray));

  Object.setPrototypeOf(car, prototypeMethods);
  car.CarInfo();
  carForm.reset();
});

if (!localStorage.getItem('usersData')) {
  console.log('LocalStorage for users is empty');
} else {
  usersArray = localStorage.getItem('usersData');
  usersArray = JSON.parse(usersArray);
  usersArray.forEach((item) => {
    Object.setPrototypeOf(item, prototypeMethods);
    const infoBlock = document.createElement('div');
    infoBlock.classList.add('prototypes__info');
    const userText = document.createElement('p');
    infoBlock.setAttribute('data-id', item.id);
    userText.textContent = `Buyer: ${item.name} ${item.surname}, country: ${item.area}, phone number: ${item.phone}.`;
    const carContainer = document.createElement('div');
    carContainer.classList.add('prototypes__car-container');
    buyList.append(infoBlock);
    infoBlock.append(userText);
    infoBlock.append(carContainer);
  });
}

if (!localStorage.getItem('carsData')) {
  console.log('LocalStorage for cars is empty');
} else {
  carsArray = localStorage.getItem('carsData');
  carsArray = JSON.parse(carsArray);
  carsArray.forEach((item) => {
    Object.setPrototypeOf(item, prototypeMethods);
    const carText = document.createElement('p');
    carText.textContent = `Car: ${item.label}, year: ${item.year}, price: ${item.price}$`;
    const infoBlock = document
      .querySelector(`[data-id="${item.id}"]`)
      .querySelector('.prototypes__car-container');
    infoBlock.append(carText);
  });
}

function addError(element, message) {
  const errorText = document.createElement('p');
  errorText.classList.add('_errorText');
  errorText.textContent = message;
  element.classList.add('_error');
  element.after(errorText);
}

function removeError(element) {
  if (element.closest('.prototypes__form-item').querySelector('._errorText')) {
    element.classList.remove('_error');
    element
      .closest('.prototypes__form-item')
      .querySelector('._errorText')
      .remove();
  }
}

clearLSButton.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});