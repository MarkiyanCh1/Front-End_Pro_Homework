//  4) Дано целое число (ввести через prompt). Выяснить, является ли оно простым
//  (простым называется число, больше 1, не имеющих других делителей кроме 1 и себя).

let number = parseInt(prompt("Enter a positive number: "));
let Prime = true;

if (number === 1) {
    console.log("1 is not a prime number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            Prime = false;
        }
    }
    if (Prime) {
        console.log(number + " is a Prime number");
    } else {
        console.log(number + " is not a Prime number");
    }
}
else {
    console.log("Error, your number is smaller or equal to 0.");
}
