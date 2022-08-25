// 5. Написать функцию, которая получает 3 аргумента: два числа и функцию.
// Совершить вызов переданной функции с двумя аргументами числами. doFunction(2, 3, power);
// в ответе должны получить 8 как 2 в степени 3.


function power1(a, n) {
    if (n === 1) {
        return a;
    } else {
        return a * power1(a, n - 1);
    }
}

function doPower(a, n, power) {
    return power;
}

console.log(power1(2, 3, power1));