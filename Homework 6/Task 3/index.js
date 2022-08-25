// 3. Создать функцию, которая удаляет из строки все символы,
// переданные вторым аргументом. 'func("hello world", ['l', 'd'])'
// вернет нам "heo wor"

let string = "hello world";
let delElem = ["l", "d"];

function NewStr(string, delElem) {
    return string
        .split("")
        .filter((item) => !delElem.includes(item))
        .join("");
}

console.log(`"${NewStr(string, delElem)}"`);