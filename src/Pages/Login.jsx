import React from "react";
import "./Login.css";
import Navbar from "../components/Navbar";

const Login = () => {
  return (

    <>

    <Navbar/>
    <section className="login">

      <div className="login-image">

      </div>

      <div className="login-box">
        <h1>Welcome Back</h1>
        <p>Login to continue your journey with Travelista</p>

        <form>
          <input type="email"placeholder="Enter Email"/>
          <input type="password" placeholder="Enter Password"/>
          <button>Login</button>

        </form>

        <span> Don't have an account? Sign Up</span>

      </div>

    </section>

    </>
    
  );
};

export default Login;