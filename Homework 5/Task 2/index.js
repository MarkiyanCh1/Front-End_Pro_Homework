function  removeElement(array, itemToRemove){
    return array.filter((item)=> {
        return itemToRemove !== item;
    });
}

console.log(removeElement([1, 2, 3, 4, 3], 3));
console.log(removeElement([true, false, true, false], false));
console.log(removeElement(['a', 'b', 'c', 'b'], 'b'));