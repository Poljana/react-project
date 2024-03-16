import "./Login.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [displayFlex, setDisplayFlex] = useState(false);

  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      //success full sign in
      const user = userCredential.user;
      console.log(user);
      navigate('/home');
    }).catch((error) => { 
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code:", errorCode, "Error Message:", errorMessage);
        setDisplayFlex(true);
        document.getElementById("password").value = null;
        setTimeout(() => {
          setDisplayFlex(false);
        }, 15000);
    });
  }

  return (
    <>
      <form onSubmit={ signIn }>
        <h3>Sign in</h3>
        <input id="email" type="text" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <p 
          className="credentials-input-error"
          style={{ display: displayFlex ? "flex" : "none" }}
        >
          Invalid email or password input
        </p>
        <button type="submit">Sign in</button>
        <div className="register-btn-div">
          <p>Don't have an account?</p>
          <Link to="/register">
            <p className="reg-btn">Register</p>
          </Link>
        </div>
      </form>
    </>
  );
}
