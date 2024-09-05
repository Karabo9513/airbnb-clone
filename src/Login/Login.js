import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions"; // Ensure this path is correct
import { openModal } from "../actions/modalAction"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access userLogin state from Redux store
  const userLogin = useSelector((state) => state.userLogin || {});
  const { loading = false, error = null, userInfo = null } = userLogin;

  // Effect to handle redirect after login
  useEffect(() => {
    if (userInfo) {
      dispatch(openModal("closed", ""));
      navigate('/dashboard'); // Redirect to dashboard or any other route
    }
  }, [dispatch, userInfo, navigate]);

  // Handle form submission
  const submitLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    dispatch(login(email, password));
  };

  return (
    <div className="login-form">
      <h2>Log in or Sign up</h2>
      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading-message">Loading...</div>}
      <form onSubmit={submitLogin}>
        <button type="button" className="facebook-login">Connect With Facebook</button>
        <button type="button" className="google-login">Connect With Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
          required
        />
        <button type="submit" className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>Don't have an account? <a href="/signup">Sign up</a></div> {/* Link to sign-up page */}
      </form>
    </div>
  );
};

export default Login;
