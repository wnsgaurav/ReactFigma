import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex bg-[#1A1A1A]">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
