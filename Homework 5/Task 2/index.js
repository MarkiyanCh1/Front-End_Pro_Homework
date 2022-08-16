// 2 Реализовать функцию removeElement(array, item) чтобы удалить элемент item из массива array.

function removeElement(){

    if(array.includes(item)){
      array.splice(array.indexOf(item), 1);
      return array;
    }
    return "No such element in array"
}

let length = true;
let numbersSet = [];
let array = [];
let number;
while (length) {
    number = prompt("Enter a number: ");
    length = (number != null);
    if (length === false) {
        break;
    }
    numbersSet.push(number);
    array = numbersSet.map(str => {
        return Number(str);
    });
}

let item = parseInt(prompt("Enter a number to delete: "));

console.log(`Initial array: ${array.join(", ")}`)
console.log(`Item to delete ${item}`)


console.log(`The new array: ${removeElement()}`)