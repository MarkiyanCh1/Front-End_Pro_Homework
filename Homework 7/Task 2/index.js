// 2. Создать сущность автомобиля:

// Характеристики автомобиля отдельными свойствами, 3 свойства

// Методы:

// Вывод на экран данных об этом автомобиле
// Присвоение этого автомобиля владельцу (записать в автомобиль объект владельца)
// Все данные о человеке и автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода
// (пустые поля, возраст >18 для человека и т.д. в случае необходимости).
// Максимально использовать функции

function User() {
    this.age = prompt("What is your age?", "18+");
}


function Car(user) {
    if (user.age >= 18){
        this.owner = emptyField("Your name:");
        this.brand = emptyField("Brand name:");
        this.year = emptyField("Car year:");
        this.type = emptyField("Type of car:");
        this.power = emptyField("Engine power");
    }
    else alert("You are not allowed to derive a car");
}


let user = new User();
let car = new Car(user);


function showData(userName){
    for (item in userName){
        if (userName[item]!==null && userName[item]!==false){
            console.log(item, ":" ,userName[item]);
        }
    }
}


function emptyField(msg){
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