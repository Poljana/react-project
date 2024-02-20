import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar.js";
import Home from "../../pages/home/Home.js";
import Login from "../../pages/login/Login.js";
import Register from "../../pages/register/Register.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
