export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Employee Management App
      </h1>

      <br />

      <ol className="p-5 sm:p-8 md:p-10 font-bold shadow-2xl bg-green-50 rounded-2xl text-left max-w-xl m-auto space-y-3 text-sm sm:text-base md:text-lg">
        <li>Add Employee</li>
        <li>View Employees</li>
        <li>Edit Employee</li>
        <li>Delete Employee</li>
      </ol>

      <br />

      <button className="font-bold px-6 py-4 sm:px-10 sm:py-5 shadow-2xl rounded-2xl text-center bg-gray-100 text-sm sm:text-base">
        Get Started
      </button>
    </div>
  );
}
