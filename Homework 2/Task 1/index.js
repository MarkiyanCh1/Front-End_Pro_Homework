// // 1) Дано трехзначное число.
// // Верно ли, что все цифры одинаковы? ‘333’
// // Есть ли среди цифр цифры одинаковые? ‘332’ ‘233’ ‘323’
//
// const initial_number = parseInt(prompt("Enter a 3-digit number"));
// let first_digit;
// let second_digit;
// let third_digit;
//
// third_digit = initial_number % 10;
// second_digit = ((initial_number - third_digit) / 10) % 10;
// first_digit = (initial_number - initial_number % 100) / 100;
//
// console.log(first_digit, second_digit, third_digit)
//
// if (first_digit === second_digit && first_digit  === third_digit) {
//     console.log("All digits of a number are equal.");
// }
// else if (first_digit === second_digit && first_digit !== third_digit){
//     console.log("First and second digits are equal." + " " + first_digit + " " + second_digit);
// }
// else if (first_digit === third_digit && first_digit !== second_digit){
//     console.log("First and third digits are equal." + " " + first_digit + " " + third_digit);
// }
// else if (second_digit === third_digit && first_digit !== second_digit){
//     console.log("Second and third digits are equal." + " " + second_digit+ " " + third_digit);
// }
// else {
//     console.log("No equal digits in the number.");
// }

for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i + " * " + j + " = " + i*j);
    }
}
