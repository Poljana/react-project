import { Link } from 'react-router-dom';


export default function VerificationEmail ()  {
    return (
        <div>
            <h2>Email verification sent</h2>
            <p>
                You must verify your email before you can sign in. Please check your email inbox for the verification link. 
            </p>
            <Link to ="/login">Go to Login</Link>
        </div>
    );
}   