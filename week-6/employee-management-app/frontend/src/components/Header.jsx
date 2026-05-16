import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="bg-gray-500 flex flex-col sm:flex-row p-4 gap-4 items-center justify-center sm:justify-end">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 rounded-3xl text-amber-50 px-5 py-2"
              : "px-5 py-2"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="create-employee"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 rounded-3xl text-amber-50 px-5 py-2"
              : "px-5 py-2"
          }
        >
          CreateEmployee
        </NavLink>

        <NavLink
          to="list"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 rounded-3xl text-amber-50 px-5 py-2"
              : "px-5 py-2"
          }
        >
          Employees
        </NavLink>
      </nav>
    </div>
  );
}
