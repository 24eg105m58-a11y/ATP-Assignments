import { useLocation } from "react-router-dom";

export default function Employee() {
  const { state } = useLocation();

  return (
    <div className="p-3 sm:p-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-5 sm:p-10 rounded-2xl shadow-2xl shadow-gray-700 text-center space-y-4 text-base sm:text-xl md:text-2xl break-words">
        <p>{state.name}</p>
        <p>{state.email}</p>
        <p>{state.mobile}</p>
        <p>{state.designation}</p>
        <p>{state.companyName}</p>
      </div>
    </div>
  );
}
