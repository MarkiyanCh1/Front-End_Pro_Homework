// 3) Даны 3 числа, определить наибольшее из них.

const number1 = +(prompt("Enter 1 number"));
const number2 = +(prompt("Enter 2 number"));
const number3 = +(prompt("Enter 3 number"));


if (number1 > number2 && number1 > number3){
    console.log("First number is the biggest" + " " + number1);
}
else if (number2 > number1 && number2 > number3){
    console.log("Second number is the biggest" + " " + number2);
}
else if (number3 > number1 && number3 > number2){
    console.log("Third number is the biggest" + " " + number3);
}
else if (number1 === number2 && number1 > number3) {
    console.log ("First number and Second number are equal and biggest " + number1)
}
else if (number1 === number3 && number1 > number2) {
    console.log ("First number and Third number are equal and biggest " + number1)
}
else if (number2 === number3 && number2 > number1) {
    console.log ("Second number and Third number are equal and biggest " + number2)
}
if (number1 === number2 && number2 === number3){
    console.log("Numbers are equal" + number1);
}
