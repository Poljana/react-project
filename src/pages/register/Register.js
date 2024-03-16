import { React, useState } from "react"; // Ensure you import React
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [displayFlex, setDisplayFlex] = useState(false);
  const navigate = useNavigate();
  
  const register = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/home');
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code:", errorCode, "Error Message:", errorMessage);
        setDisplayFlex(true);
        document.getElementById("password").value = null;
        setTimeout(() => {
          setDisplayFlex(false);
        }, 15000);
      });
  };

  return (
    <>
      <form onSubmit={register}>
        <h3>Register</h3>
        <input id="email" type="text" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <p 
          className="credentials-input-error"
          style={{ display: displayFlex ? "flex" : "none" }}
        >
          Invalid email or password input
        </p>
        <button type="submit" onClick={ register }>Sign up</button>
        <div className="signin-btn-div">
          <p>Already have an account?</p>
          <Link to="/login">
            <p className="signin-btn">Sign in</p>
          </Link>
        </div>
      </form>
    </>
  );
}

