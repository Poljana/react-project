import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
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
    });
  }

  return (
    <>
      <form>
        <h3>Sign in</h3>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn()} >Sign in</button>
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
