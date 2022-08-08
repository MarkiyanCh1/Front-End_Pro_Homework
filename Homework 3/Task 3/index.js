// 3) Дано целое число N (ввести через prompt). Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N.
// Если N не является числом, то вывести ошибку.

let limit = parseInt(prompt("Enter a number:"));

if (isNaN(limit)){
    console.log("Error, your input is not a number")
}
else if ( limit <= 0 ) {
    console.log("Error, your number is smaller or equal to 0")
}
else {
    let i = 1;
    while (i**2 <= limit && i <= 100) {
        console.log("Square root of " + i + " = " + i**2)
        i += 1;
    }
}