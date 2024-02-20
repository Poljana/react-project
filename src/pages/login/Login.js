import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form>
        <h3>Sign in</h3>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign in</button>
        <div className="register-btn-div">
          <p>Don't have an account?</p>
          <Link to="/register"><p className="reg-btn">Register</p></Link>
        </div>
      </form>
    </>
  );
}
