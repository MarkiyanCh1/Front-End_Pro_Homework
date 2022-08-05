function script5 () {
    let num = +prompt("Enter number");
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    digits.reverse();
    alert(digits.join(' '));
}