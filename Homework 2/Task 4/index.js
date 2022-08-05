// 4) Логирование пользователя:
// Проверить, имеет ли пользователь право доступа в админ панель сайта.
// Сначала проверяется логин ли равен admin, если так то спросить пароль у пользователя, который равен mySuperPassword.
// Результаты каждого шага выводить в консоль.

const login = prompt("Enter a Login");
console.log("Entered login: ", login)
if (login === "admin") {

    const password = "mySuperPassword";
    let entered_password = prompt("Enter a password");

    if (entered_password === password){
        console.log("Access granted.")
    }
    else {
        console.log("Error (Wrong password): Access denied. Not an admin.")
    }
}
else {
    console.log("Error (Wrong login): Access denied. Not an admin.")
}