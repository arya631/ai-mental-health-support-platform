
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        email
      )
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Temporary login
    // Backend authentication will be added later

    navigate("/dashboard");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    setErrors({
      ...errors,
      email: "",
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    setErrors({
      ...errors,
      password: "",
    });
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          MindCare AI
        </div>

        <h1>Welcome back</h1>

        <p className="auth-description">
          Login to continue your well-being journey.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />

          {errors.email && (
            <span className="error-message">
              {errors.email}
            </span>
          )}

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />

          {errors.password && (
            <span className="error-message">
              {errors.password}
            </span>
          )}

          <div className="forgot-password">
            <a href="#forgot">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>

        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Login;

