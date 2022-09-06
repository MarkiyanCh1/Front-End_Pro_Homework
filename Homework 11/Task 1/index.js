"use strict";

let text;
let i = 0;
const taskArray = [];

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    i += 1;
    event.preventDefault();
    if (document.getElementById("task").value.length === 0) {
        alert("You can't add empty field!");
    } else {

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

        text = this.elements[0].value;
        const area = createNode("p", []);
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

        //

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                area.setAttribute("class", "line-through ");
                console.log("Checkbox is checked..");
            } else {
                area.setAttribute("class", "");
                console.log("Checkbox is not checked..");
            }
        });

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

        this.elements[0].value = "";

        function removeAll() {
            area.remove();
            removeButton.remove();
            checkbox.remove();
            div.remove();
        }
     }
});

function createNode(tagName, attributes) {
    const el = document.createElement(tagName);
    attributes.forEach(({ name, value }) => {
        el.setAttribute(name, value);
    });
    return el;
}
let select = document.querySelector("#select");

select.addEventListener("change", function () {
    const wrappers = document.querySelectorAll(".wrapper");
    switch (this.value) {
        case "inProgress":
            console.log(this.value);
            wrappers.forEach((element) => {
                if (element.isDone == false) {
                    this.closest(".wrapper").setAttribute("class", "none");
                } else if (element.isDone == true) {
                    this.closest(".wrapper").setAttribute("class", "wrapper");
                }
            });
            break;
        case "done":
            console.log(this.value);
            wrappers.forEach((element) => {
                if (element.isDone == true) {
                    this.closest(".wrapper").setAttribute("class", "none");
                } else if (element.isDone == false) {
                    this.closest(".wrapper").setAttribute("class", "wrapper");
                }
            });
            break;
        case "all":
            console.log(this.value);
            wrappers.forEach((element) => {
                this.closest(".wrapper").setAttribute("class", "wrapper");
            });
            break;
    }
});
