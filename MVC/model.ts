type Todo = {
    id: string,
    status: "Pending" | "Completed",
    createdAt: Date,
    content: string,
};

let todos: Todo[] = [];
let onTodosUpdateCallbacks: (() => void)[] = [];

export function getTodos(): Todo[] {
    return todos
        .toSorted((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());
}

export function addTodo(todo: Todo) {
    if (todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }

    todos.push(todo);
    callOnTodosUpdateCallbacks();
}

export function toggleTodo(todoId: string) {
    const todo = todos.find((t) => t.id === todoId);

    if (!todo) {
        throw new Error(`Todo with id ${todoId} not found`);
    }

    todo.status = todo.status === "Completed" ? "Pending" : "Completed";
    callOnTodosUpdateCallbacks();
}

export function onTodosUpdate(callback: () => void) {
    onTodosUpdateCallbacks.push(callback);
}

function callOnTodosUpdateCallbacks() {
    onTodosUpdateCallbacks.forEach((callback) => callback());
}
