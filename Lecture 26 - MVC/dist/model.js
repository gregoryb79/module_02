let todos = [];
let onTodosUpdateCallbacks = [];
export function getTodos() {
    return todos
        .toSorted((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());
}
export function addTodo(todo) {
    if (todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }
    todos.push(todo);
    onTodosUpdateCallbacks.forEach((callback) => callback());
}
export function toggleTodo(todoId) { }
export function onTodosUpdate(callback) {
    onTodosUpdateCallbacks.push(callback);
}
