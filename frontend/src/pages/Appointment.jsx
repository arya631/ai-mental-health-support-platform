import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";

function Appointment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    psychologist: "",
    date: "",
    time: "",
    reason: "",
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
      newErrors.name = "Name should contain only letters and spaces.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (Number(formData.age) < 13 || Number(formData.age) > 100) {
      newErrors.age = "Age must be between 13 and 100.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    if (!formData.psychologist) {
      newErrors.psychologist = "Please select a psychologist.";
    }

    if (!formData.date) {
      newErrors.date = "Please select an appointment date.";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Appointment date cannot be in the past.";
      }
    }

    if (!formData.time) {
      newErrors.time = "Please select an appointment time.";
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Please provide a reason for the appointment.";
    } else if (formData.reason.trim().length < 10) {
      newErrors.reason =
        "Reason must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Generate booking ID
    const bookingId =
      "APT" + Math.floor(1000 + Math.random() * 9000);

    // Save appointment data
    const appointmentData = {
      ...formData,
      bookingId: bookingId,
      status: "Confirmed",
    };

    // Store data in localStorage
    localStorage.setItem(
      "appointmentData",
      JSON.stringify(appointmentData)
    );

    // Redirect to booking schedule page
    navigate("/booking-schedule");
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">

        <div className="appointment-header">
          <div className="appointment-icon">
            🧠
          </div>

          <h1>Book an Appointment</h1>

          <p>
            Connect with a psychologist and get the support you need.
          </p>
        </div>

        <form
          className="appointment-form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* Student Information */}

          <div className="section-title">
            <h2>Student Information</h2>
            <p>Please provide your basic information.</p>
          </div>

          {/* Name */}

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

          {/* Age + Gender */}

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
                <option value="">
                  Select gender
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Other">
                  Other
                </option>

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

          {/* Email */}

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error-message">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your 10-digit phone number"
              maxLength="10"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;

                if (/^[0-9]*$/.test(value)) {
                  setFormData({
                    ...formData,
                    phone: value,
                  });

                  setErrors({
                    ...errors,
                    phone: "",
                  });
                }
              }}
            />

            {errors.phone && (
              <span className="error-message">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Appointment Details */}

          <div className="section-title appointment-section">
            <h2>Appointment Details</h2>

            <p>
              Select your preferred psychologist, date and time.
            </p>
          </div>

          {/* Psychologist */}

          <div className="form-group">
            <label>Select Psychologist</label>

            <select
              name="psychologist"
              value={formData.psychologist}
              onChange={handleChange}
            >
              <option value="">
                Select a psychologist
              </option>

              <option value="Dr. Ananya">
                Dr. Ananya - Student Counselling
              </option>

              <option value="Dr. Rahul">
                Dr. Rahul - Stress & Anxiety
              </option>

              <option value="Dr. Meera">
                Dr. Meera - Emotional Well-being
              </option>
            </select>

            {errors.psychologist && (
              <span className="error-message">
                {errors.psychologist}
              </span>
            )}
          </div>

          {/* Date + Time */}

          <div className="form-row">

            <div className="form-group">
              <label>Preferred Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
              />

              {errors.date && (
                <span className="error-message">
                  {errors.date}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Preferred Time</label>

              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">
                  Select time
                </option>

                <option value="10:00 AM">
                  10:00 AM
                </option>

                <option value="11:00 AM">
                  11:00 AM
                </option>

                <option value="2:00 PM">
                  2:00 PM
                </option>

                <option value="3:00 PM">
                  3:00 PM
                </option>

                <option value="4:00 PM">
                  4:00 PM
                </option>
              </select>

              {errors.time && (
                <span className="error-message">
                  {errors.time}
                </span>
              )}
            </div>

          </div>

          {/* Reason */}

          <div className="form-group">
            <label>Reason for Appointment</label>

            <textarea
              name="reason"
              placeholder="Briefly describe what you would like support with..."
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              maxLength="500"
            ></textarea>

            <small className="character-count">
              {formData.reason.length}/500 characters
            </small>

            {errors.reason && (
              <span className="error-message">
                {errors.reason}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="book-btn"
          >
            📅 Confirm Appointment
          </button>

        </form>
      </div>
    </div>
  );
}

export default Appointment;