// 1. Создать сущность человека (данные вводит пользователь)


function User() {
    this.name = prompt("Your name?", "John");
    this.surname = prompt("Your surname?", "Doe");
    this.age = prompt("Your age?", 18);
    this.gender = prompt("Your gender?", "male");
}


let user = new User();


function showData(userName){
    for (item in userName){
        console.log(item, ":" ,userName[item]);
    }
}

showData(user);