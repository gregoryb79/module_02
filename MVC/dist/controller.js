import { addTodo, toggleTodo, addUser, getPassword, setCurrentUser } from "./model.js";
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
export function onRegisterFormSubmit(formData) {
    const rawUsername = formData.get("username");
    if (typeof rawUsername !== "string") {
        throw new Error("Username must be a string");
    }
    const password = formData.get("password");
    if (typeof password !== "string") {
        throw new Error("Password must be a string");
    }
    console.log(password);
    const repeatPassword = formData.get("repeatPassword");
    if (typeof repeatPassword !== "string") {
        throw new Error("Repeat password must be a string");
    }
    console.log(repeatPassword);
    const username = rawUsername.trim();
    console.log(`username: <${username}>`);
    if (!username) {
        throw new Error("Username can't be empty");
    }
    if (!password) {
        throw new Error("Password can't be empty");
    }
    if (!repeatPassword) {
        throw new Error("Repeat can't be empty");
    }
    if (password != repeatPassword) {
        throw new Error("Passwords don't match.");
    }
    addUser(username, password);
}
export function onLoginFormSubmit(formData) {
    const username = formData.get("username");
    if (typeof username !== "string") {
        throw new Error("Username must be a string");
    }
    const password = formData.get("password");
    if (typeof password !== "string") {
        throw new Error("Password must be a string");
    }
    console.log(password);
    console.log(`username: <${username}>`);
    if (!username) {
        throw new Error("Username can't be empty");
    }
    if (!password) {
        throw new Error("Password can't be empty");
    }
    const savedPassword = getPassword(username);
    if (password === savedPassword) {
        setCurrentUser(username);
        return true;
    }
    if (savedPassword === "") {
        throw new Error("No such username");
    }
    return false;
}
export const onToggleTodo = toggleTodo;
