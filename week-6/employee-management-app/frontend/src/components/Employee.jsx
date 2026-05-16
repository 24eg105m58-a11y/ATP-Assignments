import { useLocation } from "react-router";
export default function Employee() {
  //read  state recieved in navigation
  const { state } = useLocation();

  return (
    <div className="p-16 text-center text-2xl justify-center">
      <div className="p-16 max-w-2xl shadow-2xl shadow-gray-700 bg-white rounded-2xl">
        <p className="font-bold">{state.name}</p>
        <p className="font-bold">{state.email}</p>
        <p className="font-bold">{state.mobile}</p>
        <p className="font-bold">{state.designation}</p>
        <p className="font-bold">{state.companyName}</p>
      </div>
    </div>
  );
}
