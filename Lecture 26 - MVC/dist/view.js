import { onAddTodoSubmit } from "./controller.js";
import { getTodos, onTodosUpdate } from "./model.js";
export function init(addTodoForm, todoList) {
    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(addTodoForm, e.submitter);
        try {
            onAddTodoSubmit(formData);
            addTodoForm.reset();
        }
        catch (error) {
            console.error(error);
        }
    });
    todoList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const clicked = event.target;
            console.log(clicked);
            // console.log("Task ID:", event.target.dataset.id); // Get the data-id attribute
        }
    });
    onTodosUpdate(renderTodos);
    function renderTodos() {
        const todos = getTodos();
        todoList.innerHTML = "";
        for (const todo of todos) {
            const li = document.createElement("li");
            li.textContent = todo.content;
            if (todo.status === "Completed") {
                li.classList.add("completed");
            }
            todoList.append(li);
        }
    }
}
