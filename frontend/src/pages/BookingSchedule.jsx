import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingSchedule.css";

function BookingSchedule() {
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const savedAppointment =
      localStorage.getItem("appointmentData");

    if (savedAppointment) {
      setAppointment(JSON.parse(savedAppointment));
    }
  }, []);

  if (!appointment) {
    return (
      <div className="schedule-page">
        <div className="no-booking">
          <div className="no-booking-icon">📅</div>

          <h2>No Appointment Found</h2>

          <p>
            You haven't booked an appointment yet.
          </p>

          <button
            onClick={() => navigate("/appointment")}
          >
            Book an Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="schedule-page">

      <div className="schedule-container">

        {/* Header */}

        <div className="schedule-header">

          <div className="schedule-icon">
            📅
          </div>

          <h1>Booking Schedule</h1>

          <p>
            Your psychologist appointment details
          </p>

        </div>

        {/* Confirmation */}

        <div className="confirmation-card">

          <div className="confirmation-icon">
            ✅
          </div>

          <h2>
            Appointment Confirmed!
          </h2>

          <p>
            Your appointment has been successfully scheduled.
          </p>

          <div className="booking-id">
            <span>Booking ID</span>

            <strong>
              {appointment.bookingId}
            </strong>
          </div>

        </div>

        {/* Appointment Details */}

        <div className="schedule-card">

          <h2>Appointment Details</h2>

          <div className="detail-row">
            <span>👤 Student Name</span>
            <strong>{appointment.name}</strong>
          </div>

          <div className="detail-row">
            <span>🎂 Age</span>
            <strong>{appointment.age}</strong>
          </div>

          <div className="detail-row">
            <span>⚧️ Gender</span>
            <strong>{appointment.gender}</strong>
          </div>

          <div className="detail-row">
            <span>📧 Email</span>
            <strong>{appointment.email}</strong>
          </div>

          <div className="detail-row">
            <span>📱 Phone</span>
            <strong>{appointment.phone}</strong>
          </div>

          <div className="detail-row">
            <span>🧠 Psychologist</span>
            <strong>{appointment.psychologist}</strong>
          </div>

          <div className="detail-row">
            <span>📅 Date</span>
            <strong>{appointment.date}</strong>
          </div>

          <div className="detail-row">
            <span>🕐 Time</span>
            <strong>{appointment.time}</strong>
          </div>

          <div className="detail-row">
            <span>📌 Status</span>

            <strong className="status">
              {appointment.status}
            </strong>
          </div>

          <div className="reason-box">

            <h3>Reason for Appointment</h3>

            <p>
              {appointment.reason}
            </p>

          </div>

        </div>

        {/* Actions */}

        <div className="schedule-actions">

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            🏠 Back to Home
          </button>

          <button
            className="new-booking-btn"
            onClick={() => navigate("/appointment")}
          >
            📅 Book Another Appointment
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookingSchedule;