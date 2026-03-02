function validateTitle(title){
  if(!title){
    return "Title Required"
  }
  if(title.length<3){
    return "Min 3 characters are required"
  }
  return title
}
function validatePriority(priority){
  if(priority=="LOW" || priority=="MID" || priority=="HIGH"){
    return priority
  }
}
function validateDueDate(date){
  let dueDate=new '2026-01-02'
  let today=new date()//for system date
  if(dueDate<today){
    return "Expired"
  }
  return dueDate
}
export {validateTitle, validatePriority, validateDueDate}