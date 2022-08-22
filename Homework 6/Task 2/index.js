// 2. Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.


function arithmeticMean(array = [1,2,3,4,5,6,7,8,9,10]){
    let result = null;
    for (let i = 0; i < array.length; i++){
        result += array[i]/array.length;
    }
    return result;
}

console.log(arithmeticMean());