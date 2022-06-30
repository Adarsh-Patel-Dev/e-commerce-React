import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import "./signup.css";

const Signup = () => {


  const navigate = useNavigate();
  const location = useLocation();
  
  const encodedToken = localStorage.getItem("token");
  const {
    authState: { firstName, lastName, email, password, confirmPassword },
    authDispatch,
    signUp,
  } = useAuthContext();

  return (
    <div className="main">
      <img
        className="bg-img"
        src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />

      <div className="signup-page">
        <h2 className="signup-title">Sign Up</h2>
        <div className="userName-input">
          <input
            onChange={(e) =>
              authDispatch({ type: "FIRST_NAME", payload: e.target.value })
            }
            value={firstName}
            type="email"
            className="signup-input"
            placeholder="First Name"
            required
          />
          <input
            onChange={(e) =>
              authDispatch({ type: "LAST_NAME", payload: e.target.value })
            }
            value={lastName}
            type="email"
            className="signup-input"
            placeholder="Last Name"
            required
          />
        </div>
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
          type="password"
          className="signup-input"
          placeholder="Password"
          required
        />
        <input
          onChange={(e) =>
            authDispatch({ type: "CONFIRM_PASSWORD", payload: e.target.value })
          }
          value={confirmPassword}
          type="password"
          className="signup-input"
          placeholder="Re Enter Password"
          required
        />
        {confirmPassword !== "" && password === confirmPassword ? (
          <span>Passwords are matched ✅</span>
        ) : (
          confirmPassword !== "" &&  (<span>Passwords mis-matched❗</span>)
        )} 

        <div className="checkbox-signup">
          <label className="signup-label">
          </label>
        </div>


        <button
          className="btn-login"
          onClick={() =>
            signUp(
              
              firstName,
              lastName,
              email,
              password,
              navigate,
              location,
              encodedToken
            )
          }
        >
          Create Account
        </button>
        <span className="signup-span">
          Already have an account ?
          <button
            onClick={() =>
              navigate("/login", { state: { from: { pathname: "/" } } })
            }
            className="signup-link"
          >
            Log In
          </button>
        </span>
      </div>
    </div>
  );
};


export { Signup };
