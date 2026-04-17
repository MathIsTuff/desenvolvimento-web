const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;
    
    li.appendChild(span);
    li.appendChild(checkbox);
    

    list.prepend(li);

    input.value = "";
}

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

list.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
        const li = e.target.parentElement;

        li.classList.toggle("done", e.target.checked);

        if (e.target.checked) {
            list.appendChild(li);
        } else {
            list.prepend(li);
        }
    }
});