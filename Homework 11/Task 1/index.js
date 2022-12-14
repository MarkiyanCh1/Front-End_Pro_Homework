"use strict";

let text;
let i = 0;
const taskArray = [];

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    i += 1;
    event.preventDefault();
    const newTask = {
        id: taskArray.length === 0 ? 0 : taskArray[taskArray.length - 1].id + 1,
        name: form.elements[0].value,
        isDone: false,
    };

    taskArray.push(newTask);

    console.log(taskArray);

    const div = createNode("div", [
        { name: "class", value: "wrapper" },
        { name: "data-id", value: newTask.id },
    ]);
    document.body.appendChild(div);

    text = this.elements.task.value;

    const area = createNode("p", [{ name: "class", value: "default" }]);
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

        const wrapper = this.closest(".wrapper");
        const id = wrapper.getAttribute("data-id");

        const task = taskArray.find((taskItem) => taskItem.id == id);
        task.isDone = this.checked;

        if (task.isDone) {
            area.setAttribute("class", "line-through ");
            console.log("Checkbox is checked..");
        } else {
            area.setAttribute("class", "");
            console.log("Checkbox is not checked..");
        }
    });

    this.elements.task.value = "";

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
const select = document.getElementById("select");
select.addEventListener("change", function () {
    switch (this.value) {
        case "done":
            console.log(this.value);
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].isDone != false) {
                    const element = document.querySelector(`[data-id="${i}"]`);

                    element.setAttribute("class", "wrapper");
                } else {
                    const element = document.querySelector(`[data-id="${i}"]`);

                    element.setAttribute("class", "none");
                }
            }
            break;
        case "inProgress":
            console.log(this.value);
            for (let i = 0; i < taskArray.length; i++) {
                if (taskArray[i].isDone == false) {
                    const element = document.querySelector(`[data-id="${i}"]`);

                    element.setAttribute("class", "wrapper");
                } else {
                    const element = document.querySelector(`[data-id="${i}"]`);

                    element.setAttribute("class", "none");
                }
            }
            break;
        case "all":
            console.log(this.value);
            for (let i = 0; i < taskArray.length; i++) {
                const element = document.querySelector(`[data-id="${i}"]`);

                element.setAttribute("class", "wrapper");
            }
            break;
        default:
            console.log("No such value")
    }
});
