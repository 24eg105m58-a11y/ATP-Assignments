import { addTask, getAllTasks, completeTask } from "./task.js";
addTask("Eating", "MID", "2026-01-02");
addTask("SLEEPING", "HIGH", "2026-11-02");
addTask("DA", "LOW", "2026-01-02");
console.log(getAllTasks());
//complete a task
console.log(completeTask(1));
//display all tasks again to check whether completed or not
console.log(getAllTasks());
