import "./logout.css";
import { Link } from "react-router-dom";

const Logout = () => {

    return (
        <>

     <div className="main">
        <img className="bg-img" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>

        <div className="login-page">
            <h2 className="signup-title">Log Out</h2>
            <span className="signup-span">You are Logged Out </span>
            <Link to ="/login">
            <button className="btn-login">Login</button>
            </Link>
            <Link to ="/signup">
            <button className="btn-login outline">Signup</button>
            </Link>
        </div>
    </div>
        </>

    );
}

export { Logout };