import { Outlet } from "react-router-dom";
import "./App.css";
import "./styles/global.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h1>coucou c'est nous</h1>
      <Outlet />
    </>
  );
}

export default App;
