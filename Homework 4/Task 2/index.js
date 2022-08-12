// 2. Дан массив
// [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5|
//
// 2.1 Найти сумму положительных значений и количество положительных элементов.
//
// 2.2 Найдите минимальный элемент массива и его порядковый номер.
//
// 2.3 Найдите максимальный элемент массива и его порядковый номер.
//
// 2.4 Определить количество отрицательных элементов.
//
// 2.5 Найти количество нечетных положительных элементов.
//
// 2.6 Найти сумму четных положительных элементов.
//
// 2.7 Найти произведение положительных элементов.
//
// 2.8 Найти самый большой среди элементов массива, остальное обнулить.



const numbersArray = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];

console.log(numbersArray.join(" "));

function sumOfPositiveFunction(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        array[i] >= 0 ? sum+=array[i] : sum;
    }
    return sum;
}
function numberOfPositiveFunction(array){
    let counter = 0;
    for (let i = 0; i < array.length; i++){
        array[i] > 0 ? counter += 1 : counter;
    }
    return counter;
}

let sumOfPositive;
let numberOfPositive;
sumOfPositive = sumOfPositiveFunction(numbersArray);
numberOfPositive = numberOfPositiveFunction(numbersArray);
console.log(`2.1 Number and sum of positive values:  number of positive values: ${numberOfPositive}, sum of positive values: ${sumOfPositive};`);


function minElementFunction(array){
    let min = array.reduce((a, b) => Math.min(a, b));
    let position = numbersArray.indexOf(min);
    return minPosition = [min, ` ${position + 1}`];
}

let minElement;
minElement = minElementFunction(numbersArray);
console.log(`2.2 Minimal value and its position:  ${minElement};`);

function maxElementFunction(array) {
    let max = array.reduce((a, b) => Math.max(a, b));
    let position = numbersArray.indexOf(max);
    return maxPosition = [max, ` ${position + 1}`];
}

let maxElement;
maxElement = maxElementFunction(numbersArray);
console.log(`2.3 Maximal value and its position: ${maxElement};`);

function numberOfNegativeFunction(array){
    let counter = 0;
    for (let i = 0; i < array.length; i++){
        array[i] < 0 ? counter += 1 : counter;
    }
    return counter;
}

let numberOfNegative;
numberOfNegative = numberOfNegativeFunction(numbersArray);
console.log(`2.4 Number of negative values: ${numberOfNegative}`);

function numberOfPositiveOddsFunction(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++){
        array[i] >= 0 && array[i]%2 !== 0 ? counter += 1 : counter;
    }
    return counter;
}

let numberOfPositiveOdds;
numberOfPositiveOdds = numberOfPositiveOddsFunction(numbersArray);
console.log(`2.5 Number of positive odd values: ${numberOfPositiveOdds}`);

function sumOfPositiveEvensFunction(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        array[i] >= 0 && array[i]%2 === 0 ? sum += array[i] : 0;
    }
    return sum;
}

let sumOfPositiveEvens;
sumOfPositiveEvens = sumOfPositiveEvensFunction(numbersArray);
console.log(`2.6 Sum of positive even value: ${sumOfPositiveEvens}`);

function multiplyPositiveFunction(array){
    let multiply = 1;
    for (let i = 0; i < array.length; i++){
        array[i] >= 0 ? multiply *= array[i] : 0;
    }
    return multiply;
}

let multiplyPositive;
multiplyPositive = multiplyPositiveFunction(numbersArray);
console.log(`2.7 Multiply of positive values: ${multiplyPositive}`);

function biggestElementFunction(array){
    let maxElement = maxElementFunction(array)[0];
    let newArray =[];
    for (let i = 1; i < numbersArray.length; i++){
        if (numbersArray[i] !== maxElement){
            newArray.push(0);
        }
        else{
            newArray.push(maxElement);
        }
    }
    return newArray;
}

let biggestElement;
biggestElement = biggestElementFunction(numbersArray);
console.log(`2.8 Biggest value: ${biggestElement}`);
