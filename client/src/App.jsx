import {Outlet} from "react-router-dom";
import "./App.css";
import "./styles/global.css"

function App() {
  return (
    <>
    <h1>coucou c'est nous</h1>
    <Outlet/>
    </>
  );
}

export default App;
