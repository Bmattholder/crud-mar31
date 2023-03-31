import React, { useState } from "react";

import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;

  const navigate = useNavigate();

  const onChange = (e) => {
    setLoginForm((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    navigate("/");
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <input
        type="email"
        className="login-input"
        name="email"
        id="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="login-input"
        name="password"
        id="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button className="login-button">Submit</button>
    </form>
  );
}

export default Login;
