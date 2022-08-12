// 1. Создать массив, длину и элементы которого задает пользователь (через prompt)
//     (повторяется промпт, пока пользователь не нажмет кэнсэл).
//     Затем отсортировать массив по росту.
//     Затем, удалить элементы из массива со 2 по 4. По мере изменений выводить содержимое массива в консоль.

let length = true;
let numbersSet = [];


let number;
while (length) {
    number = prompt();
     length = (number != null);
    if (length === false) {
        break;
    }
    numbersSet.push(number);
    console.log(number);
}


console.log("Entered initial array: " + numbersSet);


numbersSet.sort(function(a, b) {
    return a - b;
});

console.log("Sorted array: " + numbersSet);

numbersSet.splice(1,3);

console.log("Deleted elements from 2 to 4: " + numbersSet);

