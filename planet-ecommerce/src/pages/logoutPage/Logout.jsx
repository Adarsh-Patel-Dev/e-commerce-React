import "./logout.css";



const Logout = () => {

    return (
        <>

     <div className="main">
        <img className="bg-img" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
     {/* </div> */}

        {/* <div className="para"> */}

        <div className="signup-page">
            <h2 className="signup-title">Log Out</h2>
            {/* <input type="email" className="signup-input" placeholder="Email" required/>
            <input type="password" className="signup-input" placeholder="Password" required/>
            <div className="checkbox-signup">
                <input type="checkbox" className="signup" />
                <label className="signup-label">I agree to the Terms of Service and Privacy Policy</label>
            </div> */}
            <span className="signup-span">You are Logged Out </span>

            <button href="#" className="btn-login">Login</button>
            <button href="#" className="btn-login outline">Signup</button>
        </div>
    </div>
        </>

    );
}

export { Logout };