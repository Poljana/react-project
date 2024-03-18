import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Navbar() {
  const [invertion, setInvertion] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [displayFlex, setDisplayFlex] = useState(false);

  //Profile drop down menu on click
  const displayFlexTrue = {
    display: 'flex',
    top: '4rem',
    transition: 'top 100ms ease-in-out'
  };
  const displayFlexFalse = {
    display: 'none',
    top: '-5rem',
    transition: 'top 100ms ease-in-out'
  };

  function inverted() {
    setInvertion(!invertion);

    setTimeout(() => {
      setInvertion(invertion);
    }, 150);
  }

  const changeDisplay = () => {
    if (displayFlex) {
      setDisplayFlex(false);
    } else {
      setDisplayFlex(true);
    }
  };

  //Log in button changes as auth state changes
    useEffect(() => {  
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      setLoginState(true);
      } else {
      setLoginState(false);
      }
    });

    return () => { unsubscribe(); };
  });

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
      setDisplayFlex(false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error code:", errorCode, "Error Message:", errorMessage);
    })
  }

  return (
    <nav>
      <Link to="/home">
        <h1>Simple Login Page</h1>
      </Link>
      {
        loginState ?
        <button
            id="user-profile"
            type="button"
            onClick={ changeDisplay }
        >
          Profile
        </button> :
        <Link to="/login">
        <button
          type="button"
          style={{ filter: invertion ? "invert(100%)" : "none" }}
          onClick={inverted}
        >
          Log in
        </button>
        </Link>
      }
      <ul style={ displayFlex ? displayFlexTrue : displayFlexFalse }>
        <li>
          <button id="sign-out" type="button" onClick={ handleSignOut }>
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
