export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Employee Managemment App</h1>
      <br />
      <ol className="p-10 font-bold shadow-2xl bg-green-50 rounded-2xl  ">
        <li>Add Employee</li>
        <li>View Employees</li>
        <li>Edit Employee</li>
        <li>Delete Employeee</li>
      </ol>
      <br />
      <button className="font-bold p-10 shadow-2xl rounded-2xl text-center bg-gray-100">
        Get Started
      </button>
    </div>
  );
}
