import {
  validateTitle,
  validatePriority,
  validateDueDate,
} from "./validator.js";
let tasks = [];
function addTask(title, priority, dueDate) {
  if (!validateTitle() && !validatePriority() && !validateDueDate()) {
    return false;
  }
  //push taskObj to tasks array

  return tasks.push(title, priority, dueDate);
}
function getAllTasks() {
  // Return all tasks
  return tasks;
}

function completeTask(taskId) {
  //find task and marks as complete
  const findTask = tasks.find((taskElement) => taskElement.id === taskId);
  if (!findTask) return "task not found";
  findTask.completed = true;
  return "task completed";
}

export { addTask, getAllTasks, completeTask };
