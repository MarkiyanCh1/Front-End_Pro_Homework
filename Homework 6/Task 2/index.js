// 2. Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.

function arithmeticMean() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = numbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });

    return  sum / numbers.length;

}

console.log(arithmeticMean());