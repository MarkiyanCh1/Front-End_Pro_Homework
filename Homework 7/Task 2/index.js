// 2. Создать сущность автомобиля:

// Характеристики автомобиля отдельными свойствами, 3 свойства

// Методы:

// Вывод на экран данных об этом автомобиле
// Присвоение этого автомобиля владельцу (записать в автомобиль объект владельца)
// Все данные о человеке и автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода
// (пустые поля, возраст >18 для человека и т.д. в случае необходимости).
// Максимально использовать функции

function User() {
    this.age = askForAge()
}
const askForAge = () => {
    let age
    while (!age) {
        age = +(prompt("What is your age?", "18+"));
    }
    return age
}

function Car(user) {
    if (user.age >= 18){
        this.owner = recordInfo("Your name:");
        this.brand = recordInfo("Brand name:");
        this.year = recordInfo("Car year:");
        this.type = recordInfo("Type of car:");
        this.power = recordInfo("Engine power");
    }
    else if (user.age < 18) {
        alert("You are not allowed to drive a car")
    }
    else alert("Error");
}


let user = new User();
let car = new Car(user);


function showData(userName){
    for (item in userName){
        if (userName[item]) {
            console.log(item, ":" ,userName[item]);
        }
    }
}


function recordInfo(msg){
    let text;
    do {
        text = prompt(msg);
        if (text === null ){
            text = "not available";
        }
    } while (text.length === 0);
    return text;
}

showData(car);
console.log(car);