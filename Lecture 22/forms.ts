type Task = {
    title: string,
    isImportant: boolean,
    assignee: number,
    description?: string,
    moreInfo?: string,
};

export function addTask(task: Task) {
    // TODO: add to storage
    alert(JSON.stringify(task, null, 4));
}
