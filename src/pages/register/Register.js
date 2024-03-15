import React from "react"; // Ensure you import React
import "./Register.css";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const register = (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user); 
      })
      .catch((error) => {
        // Handle errors 
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code:", errorCode, "Error Message:", errorMessage);
      });
  };

  return (
    <>
      <form onSubmit={register}>
        <h3>Register</h3>
        <input id="email" type="text" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <button type="submit">Sign up</button>
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

