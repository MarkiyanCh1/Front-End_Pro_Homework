function script1 () {
    function math(num1, num2, operator) {
        return eval(`${Number(num1)} ${operator} ${Number(num2)}`);
    }

    const num1 = prompt("Enter first number");

    const operator = prompt(` 
    Enter operator:
    multiply => *
    divide => /
    add => +
    subtract => -
    `);

    const num2 = prompt("Enter second number");

    const result = math(num1, num2, operator);
    alert("The result is " + result);
}





