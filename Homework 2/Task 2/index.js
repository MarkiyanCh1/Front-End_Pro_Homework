// 2) Определить, есть ли заданное шестизначное число зеркальным? (123321, 147741)

const number = +(prompt("Enter a 6-digit number"));

let second_part = number % 1000;
let first_part = (number - second_part) / 1000;

let second_part_reversed = (second_part % 10 * 100) + ( second_part % 100 -  second_part % 10) + (second_part - (second_part % 100))/100;


if (first_part === second_part_reversed) {
    console.log("The number" + " " + number+ " " + "is a palindrome")
}
else {
    console.log("The number" + " " + number + " " +   "is not a palindrome")
}
