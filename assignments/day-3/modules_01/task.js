import {validateTitle, validatePriority,validateDueDate} from './validator.js'
let tasks=[];
function addTask(title, priority, dueDate){
  if(!validateTitle() && !validatePriority() && !validateDueDate()){
    return false  
  }
  //push taskObj to tasks array
  
  return tasks.push(title,priority,dueDate)
}
function getAllTasks() {
// Return all tasks
  return tasks
  }


function completeTask(taskId) {
// Find task and mark as complete
  let findTask=tasks.find(taskId)
  return findTask
  }
export {addTask,getAllTasks,completeTask}
