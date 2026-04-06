import exp from "express";
import { employeeModel } from "../models/employeeModel.js";
export const employeeApp = exp.Router();

//create
employeeApp.post("/employee", async (req, res) => {
  const newEmp = req.body;
  const employeeDocument = new employeeModel(newEmp);
  console.log("new Employee created");
  await employeeDocument.save();
  console.log("Saved to database");
  res.status(201).json({ message: "user Created", newEmp });
});
employeeApp.get("/employee", async (req, res) => {
  const getUser = await employeeModel.find();
  res.status(200).json({ message: "users:", payload: getUser });
});
employeeApp.put("/employee/:id", async (req, res) => {
  const modifiedEmp = req.body;
  const updatedEmp = await employeeModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },
    },
    {
      returnDocument: "after",
    },
  );
  //check if present
  if (!updatedEmp) {
    return res.status(404).json({ message: "employee not found" });
  }
  res
    .status(200)
    .json({ message: "updated successfully", payload: updatedEmp });
});

employeeApp.delete("/employee/:id", async (req, res) => {
  //if object id in url
  const employeeObjUrl = req.params.id;
  //dinf by id and delete
  const deletedEmployee = await employeeModel.findByIdAndDelete(
    employeeObjUrl,
    { runValidators: true },
  );
  //if not found
  if (!deletedEmployee) {
    return res.status(404).json({ message: "employee not found" });
  }
  //send final response as employee deleted
  res.status(201).json({ message: " employee deleted.", deletedEmployee });
});
