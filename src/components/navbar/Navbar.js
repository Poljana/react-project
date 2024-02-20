import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [invertion, setInvertion] = useState(false);

  function inverted() {
    setInvertion(!invertion);

    setTimeout(() => {
      setInvertion(invertion);
    }, 150);
  }

  return (
    <nav>
      <Link to="/home">
        <h1>Simple Login Page</h1>
      </Link>
      <Link to="/login">
        <button
          type="button"
          style={{ filter: invertion ? "invert(100%)" : "none" }}
          onClick={inverted}
        >
          Log in
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
