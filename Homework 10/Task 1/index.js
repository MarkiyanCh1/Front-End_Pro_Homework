"use strict";

let text;
let i = 0;

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    i += 1;
    event.preventDefault();
    let div = document.createElement("div");
    div.setAttribute("class", "wrapper");
    document.body.appendChild(div);

    text = this.elements[0].value;
    const area = document.createElement("p");
    area.innerText = text;
    div.appendChild(area);

    const checkbox = createNode("input", [
        { name: "type", value: "checkbox" },
        { name: "name", value: "checkbox" },
        { name: "class", value: "checkbox" },
    ]);
    div.appendChild(checkbox);

    const removeButton = createNode("button", [
        { name: "id", value: `btnRemoveTask${i}` },
        { name: "class", value: "removeButton" },
    ]);
    removeButton.innerText = "Remove";
    div.appendChild(removeButton);

    const btnRemoveTask = document.getElementById(`btnRemoveTask${i}`);
    btnRemoveTask.addEventListener("click", removeAll);

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            area.setAttribute("class", "line-through ");
            console.log("Checkbox is checked..");
        } else {
            area.setAttribute("class", "");
            console.log("Checkbox is not checked..");
        }
    });

    this.elements[0].value = "";

    function removeAll() {
        area.remove();
        removeButton.remove();
        checkbox.remove();
        div.remove();
    }
});
function createNode(tagName, attributes) {
    const element = document.createElement(tagName);
    attributes.forEach(({ name, value }) => {
        element.setAttribute(name, value);
    });
    return element;
}