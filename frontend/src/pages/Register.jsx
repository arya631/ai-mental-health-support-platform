
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    course: "",
    year: "",
    college: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should contain only letters.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (Number(formData.age) < 13 || Number(formData.age) > 100) {
      newErrors.age = "Please enter a valid age.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.course) {
      newErrors.course = "Please select your course.";
    }

    if (!formData.year) {
      newErrors.year = "Please select your year of study.";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required.";
    } else if (formData.college.trim().length < 3) {
      newErrors.college = "College name is too short.";
    }

    if (!formData.email) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one number.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-logo">
          MindCare AI
        </div>

        <h1>Create your account</h1>

        <p className="register-description">
          Create your student account and begin your well-being journey.
        </p>

        <form onSubmit={handleSubmit}>

          <h2>Personal Information</h2>

          <div className="form-row">

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <span className="error-message">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter 10-digit number"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <span className="error-message">
                  {errors.phone}
                </span>
              )}
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Age</label>

              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                min="13"
                max="100"
                value={formData.age}
                onChange={handleChange}
              />

              {errors.age && (
                <span className="error-message">
                  {errors.age}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">
                  Prefer not to say
                </option>
              </select>

              {errors.gender && (
                <span className="error-message">
                  {errors.gender}
                </span>
              )}
            </div>

          </div>

          <h2>Academic Information</h2>

          <div className="form-row">

            <div className="form-group">
              <label>Course / Program</label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="B.Sc">B.Sc</option>
                <option value="M.Sc">M.Sc</option>
                <option value="B.Com">B.Com</option>
                <option value="M.Com">M.Com</option>
                <option value="BA">BA</option>
                <option value="MA">MA</option>
                <option value="Other">Other</option>
              </select>

              {errors.course && (
                <span className="error-message">
                  {errors.course}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Year of Study</label>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Postgraduate">
                  Postgraduate
                </option>
              </select>

              {errors.year && (
                <span className="error-message">
                  {errors.year}
                </span>
              )}
            </div>

          </div>

          <div className="form-group full-width">
            <label>College / Institution</label>

            <input
              type="text"
              name="college"
              placeholder="Enter your college or institution"
              value={formData.college}
              onChange={handleChange}
            />

            {errors.college && (
              <span className="error-message">
                {errors.college}
              </span>
            )}
          </div>

          <h2>Account Information</h2>

          <div className="form-group full-width">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error-message">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && (
                <span className="error-message">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {errors.confirmPassword && (
                <span className="error-message">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              required
            />

            <label htmlFor="terms">
              I agree to the Terms of Use and Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

        </form>

        <p className="register-switch">
          Already have an account?{" "}
          <Link to="/login">
            Login
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

export default Register;

