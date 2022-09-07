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

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    div.appendChild(checkbox);

    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", `btnRemoveTask${i}`);
    removeButton.setAttribute("class", "removeButton");
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
