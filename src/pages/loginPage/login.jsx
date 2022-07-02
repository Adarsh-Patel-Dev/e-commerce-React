import "./login.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import {Toast} from "../../components/Toast/Toast"

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
  
    const encodedToken = localStorage.getItem("token");
    const {
      authState: { email, password },
      authDispatch,
      login,
    } = useAuthContext();

    console.log("location", location)
  
    return (
      <div className="main">
        <img
          className="bg-img"
          src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
  
        <div className="signup-page">
          <h2 className="signup-title">Log In</h2>
          
            
          <input
            onChange={(e) =>
              authDispatch({ type: "EMAIL", payload: e.target.value })
            }
            value={email}
            type="email"
            className="signup-input"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) =>
              authDispatch({ type: "PASSWORD", payload: e.target.value })
            }
            value={password}
            minlength="6"
            type="password"
            name="password"
            className="signup-input"
            placeholder="Password"
            required
          />
          
         
          <div className="checkbox-signup">
            <label className="signup-label">
            </label>
          </div>
  
          <button
            className="btn-login"
            onClick={() =>
              login(
                email,
                password,
                navigate,
                location,
                encodedToken
              )
            }
          >
            Login
          </button>
          <button className="btn-login outline"
           onClick={()=>login("adarshpatel@gmail.com","adarsh@neog",navigate,location,encodedToken)}
          >Test Login</button>
  
          <span className="signup-span">
           New User ?
            <button
              onClick={() =>
                navigate("/signup", { state: { from: { pathname: "/" } } })
              }
              className="signup-link"
            >
              SignUp
            </button>
          </span>
          
        </div>
      </div>
    );
  };
  
  
  export { Login };