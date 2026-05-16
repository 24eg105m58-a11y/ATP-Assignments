import Header from "./Header";
import { Outlet } from "react-router";
import Home from "./Home";
export default function RootLayout() {
  return (
    <div>
      <Header />

      <div className="bg-gray-400 min-h-screen mx-2 sm:mx-5 md:mx-10 lg:mx-20 p-3 sm:p-5 md:p-10 lg:p-20">
        <Outlet />
      </div>
    </div>
  );
}
