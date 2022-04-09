import { Navigation } from "../../components/navigation/Navigation";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {

    return (
        <>

     <div className="main">
        <img className="bg-img" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>

        <div className="signup-page">
            <h2 className="signup-title">Sign Up</h2>
            <input type="text" className="signup-input" placeholder="First Name" required/>
            <input type="text" className="signup-input" placeholder="Last name" required/>
            <input type="email" className="signup-input" placeholder="Email" required/>
            <input type="password" className="signup-input" placeholder="Password" required/>
            <input type="password" className="signup-input" placeholder="Confirm Password" required/>
            <div className="checkbox-signup">
                <input type="checkbox" className="signup" />
                <label className="signup-label">I agree to the Terms of Service and Privacy Policy</label>
            </div>

            <button href="#" className="btn-login">Create Account</button>
            <span className="signup-span">Already have an account ? 
            <Link to='/login'>   
            <button className="signup-link">Log In</button>
            </Link> 
            </span>
        </div>
    </div>
        </>

    );
}

export { Signup };