import { Outlet } from "react-router-dom";
import "./App.css";
import "./styles/global.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
