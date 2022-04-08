import { Navigation } from "../../components/navigation/Navigation";
import "./signup.css";

const Signup = () => {

    return (
        <>

     <div className="main">
        <img className="bg-img" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
     {/* </div> */}

        {/* <div className="para"> */}

        <div className="signup-page">
            <h2 className="signup-title">Sign Up</h2>
            <input type="email" className="signup-input" placeholder="Email" required/>
            <input type="password" className="signup-input" placeholder="Password" required/>
            <div className="checkbox-signup">
                <input type="checkbox" className="signup" />
                <label className="signup-label">I agree to the Terms of Service and Privacy Policy</label>
            </div>

            <button href="#" className="btn-login">Create Account</button>
            <span className="signup-span">Already have an account ? <button href="/loginPage/login.html" className="signup-link">Log In</button></span>
        </div>
    </div>
        </>

    );
}

export { Signup };