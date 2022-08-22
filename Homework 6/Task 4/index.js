// 4. Написать функцию, принимающую один параметр. При первом вызове она его запоминает,
// при втором - суммирует переданный параметр с тем, что передали впервые и т.д.
// Все это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
// На каждом вызове возвращает текущую сумму

function getCounter() {
    let counter = 0;
    return function (userVar) {
        return counter+=userVar;
    };
}
let count = getCounter();
console.log(`sum(3) = ${count(3)}`);
console.log(`sum(5) = ${count(5)}`);
console.log(`sum(20) = ${count(20)}`);