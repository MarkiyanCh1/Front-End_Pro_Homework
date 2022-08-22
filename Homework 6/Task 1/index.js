// 1. Создать функцию для расчета произведения двух чисел, вызываемого следующим образом: apl(5)(2). \
// Функция должна возвращать результат (внутри функции не должно быть консоль лога!)

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}


function multiply(a, b) {
    return a * b;
}

let curriedMultiply = curry(multiply);

console.log( curriedMultiply(5)(2) );
