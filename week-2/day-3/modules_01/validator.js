function validateTitle(title) {
  if (!title) {
    return "Title Required";
  }
  if (title.length < 3) {
    return "Min 3 characters are required";
  }
  return true;
}
function validatePriority(priority) {
  if (priority == "LOW" || priority == "MID" || priority == "HIGH") {
    return true;
  }
  return "priority must be LOW,MID,HIGH";
}
function validateDueDate(dateStr) {
  let dueDate = new Date(dateStr);
  let today = new Date(); //for system date
  if (dueDate < today) {
    return "Expired";
  }
  return true;
}
export { validateTitle, validatePriority, validateDueDate };
