import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <form>
        <h3>Register</h3>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign up</button>
        <div className="signin-btn-div">
          <p>Already have an account?</p>
          <Link to="/login"><p className="signin-btn">Sign in</p></Link>
        </div>
      </form>
    </>
  );
}