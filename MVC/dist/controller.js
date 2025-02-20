import { addTodo, toggleTodo } from "./model.js";
export function onAddTodoSubmit(formData) {
    const rawContent = formData.get("content");
    if (typeof rawContent !== "string") {
        throw new Error("Content must be a string");
    }
    const content = rawContent.trim();
    if (!content) {
        throw new Error("Content can't be empty");
    }
    addTodo({
        id: crypto.randomUUID().replaceAll("-", "").slice(-8),
        createdAt: new Date(),
        status: "Pending",
        content,
    });
}
export const onToggleTodo = toggleTodo;
